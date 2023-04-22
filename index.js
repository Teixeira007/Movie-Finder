const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const mysql = require('mysql2')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const port = 3000;
let path = require('path');
const app = express();

app.use(session({secret: 'hjahfkjadhshd234h23h4ioh24k'}));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/img', express.static(path.join(__dirname, 'img')))
app.use('/icon', express.static(path.join(__dirname, 'icon')))
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({ extended: true }));


// Crie uma conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'moviefinder',
});

connection.connect((err) => {
    if (err) {
      console.error('Erro de conexão:', err);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL.');
});
  



app.get('/', function(req, res) {
    const userId = req.session.userId;
    if(userId){
      console.log('usuario logado');
      res.render('index');
    }else{
      console.log('visitante');
      res.render('index');
    }
});

app.get('/detalhes', (req, res) => {
res.sendFile(path.join(__dirname, '/views/detailsMovie.html'));
});
  
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/TelaLoginCadastro.html'));
})

app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/TelaLoginCadastro.html'));
})

// Realizando login do usuário
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Consulta SQL para obter o hash da senha do usuário
    const query = 'SELECT id, password FROM users WHERE email = ?';
    connection.query(query, [email], (error, results) => {
      if (error) throw error;
  
      if (results.length > 0) {
        const userId = results[0].id;
        const hash = results[0].password;
  
        // Comparando a senha em texto puro com a senha criptografada armazenada no banco de dados
        bcrypt.compare(password, hash, function(err, result) {
          if (result) {
            // Se as credenciais estiverem corretas, armazena o ID do usuário na sessão
            req.session.userId = userId;
            res.redirect('/dashboard');
          } else {
            res.redirect('/login?id=login&error=Email ou senha incorreto.');
          }
        });
      } else {
        res.redirect('/login?id=login&error=Email ou senha incorreto.');
      }
    });
});

// Realizando o cadastro de usuário
app.post('/cadastro', (req, res) => {
  const { name, email, password } = req.body;

//Verifica se tem um usuário cadastrado com esse email
  const queryEmailExist = "SELECT * FROM users WHERE email = ?" ;
  connection.query(queryEmailExist, [email], (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.redirect('/cadastrar?id=cadastrar&error=Este email já está cadastrado no sistema');
    } else {
        // Criptografando a senha
        bcrypt.hash(password, saltRounds, function(err, hash) {
            // Insere o novo usuário no banco de dados
            connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (error, results) => {
                if (error) throw error;
                res.redirect('/login?id=login');
            });
        });
        
      }
    });

  
});

// Recuperando o userid session para saber se o usuário estar logado ou não
app.get('/userId', function(req, res) {
  const userId = req.session.userId;
  res.json({ userId: userId });
});


// Quando o usuário logar será levado para a página perfil de usuário
app.get('/dashboard', (req, res) => {
  const userId = req.session.userId;
  if(userId){
    // Consulta SQL para obter o nome do usuário
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [userId], (error, results) => {
      if (error) throw error;
      const name = results[0].name;
      const created_at = results[0].created_at;
      const email = results[0].email;
      res.render('perfil.ejs', { name, email, created_at});
    });
  } 
});

// Adicionar filme favorito no banco de dados
app.post('/favoritesMovie/:id', (req, res) =>{
    const userId = req.session.userId;
    const movieId = req.params.id;

    if(userId){
        const queryMovieExist = 'SELECT * FROM favoriteMovies WHERE idMovie = ?'
        connection.query(queryMovieExist, [movieId], (error, results) =>{
            if(error) throw error;
            // res.render('/detalhes?id=movieId')
            if (results.length > 0) {
                // res.redirect('/cadastrar?id=cadastrar&error=Este email já está cadastrado no sistema');
            } else {
                connection.query('INSERT INTO favoriteMovies (idMovie, idUser) values (?,?)', [movieId, userId], (error, results) =>{
                    if(error) throw error;
                    // Fica na tela msm
                })
            }
        })

    }
})

// Pegar lista dos ids dos filmes favoritos
app.get('/favoritesMovie', (req, res) =>{
    const listMovie = [];
    const userId = req.session.userId;

    // Pega todos os ids de filmes que estão na lista de favoritos
    connection.query('SELECT idMovie FROM favoriteMovies WHERE idUser = ?', [userId], (error, results) =>{
        if(error) throw error;
        results.forEach(element =>{
            listMovie.push(element.idMovie)
        })

        res.send(listMovie)
    })

    
})

app.listen(port, ()=>{
    console.log('servidor rodando na porta:', port);
})