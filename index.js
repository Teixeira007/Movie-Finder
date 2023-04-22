const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const mysql = require('mysql2')

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
    res.render('index');
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

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        // Se as credenciais estiverem corretas, armazena o ID do usuário na sessão
        req.session.userId = results[0].id;
        res.redirect('/');
      } else {
        res.redirect('/login?id=login&error=Credenciais inválidas.');
      }
    });
  });
  
  app.post('/cadastro', (req, res) => {
    const { name, email, password } = req.body;
    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
      if (error) throw error;
      res.redirect('/login?id=login');
    });
  });

app.listen(port, ()=>{
    console.log('servidor rodando na porta:', port);
})