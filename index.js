const express = require('express');
const session = require('express-session');

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

app.listen(port, ()=>{
    console.log('servidor rodando');
})