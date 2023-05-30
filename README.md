# Movie-Finder
O MovieFinder é uma aplicação que ajuda a descobrir os melhores filmes em exibição e em alta demanda, com avaliações de usuários e uma 
lista personalizada de filmes favoritos. É uma plataforma para conectar amantes do cinema e obter recomendações personalizadas. A aplicação 
é fácil de usar e socialmente interativa.

## Servidor.js
O arquivo index.js contém o código de um servidor Express.js que utiliza o MySQL como banco de dados. Abaixo estão as principais funcionalidades do servidor:

- Configuração e inicialização do servidor Express.js.
- Configuração de sessão e uso do middleware body-parser para análise de requisições.
- Conexão com o banco de dados MySQL.
- Roteamento para diferentes URLs.
#### Dependências
O servidor requer as seguintes dependências:

- express: framework para criação de aplicativos web em Node.js.
- express-session: middleware para armazenamento de sessões.
- body-parser: middleware para análise de requisições HTTP.
- http: módulo HTTP do Node.js.
- mysql2: driver para conexão com o MySQL.
- bcrypt: biblioteca para criptografia de senhas.
- ejs: mecanismo de template para renderização de arquivos HTML.
#### Configuração do Servidor
O servidor é configurado com as seguintes opções:

- A porta do servidor é definida como 3000.
- O diretório de visualização (views) é configurado.
- Os diretórios estáticos para arquivos CSS, JavaScript, imagens e ícones são definidos.
- O mecanismo de renderização EJS é configurado.
#### Banco de Dados MySQL
O servidor estabelece uma conexão com um banco de dados MySQL com as seguintes configurações:

- Host: localhost
- Usuário: root
- Senha: admin
- Banco de dados: moviefinder
Após a conexão ser estabelecida com sucesso, uma mensagem é exibida no console.

#### Roteamento
O servidor define várias rotas para diferentes URLs. Aqui estão algumas delas:

#### Rota '/': Rota principal do servidor. Se o usuário estiver logado, renderiza a página index. Caso contrário, 
também renderiza a página index.

```http
localhost:3000
```

#### Rota '/detalhes': Rota para a página de detalhes do filme.
```http
GET localhost:3000/detalhes
```
#### Rota '/login': Rota para a página de login.
```http
GET localhost:3000/login
```
#### Rota '/cadastrar': Rota para a página de cadastro de usuário.
```http
GET localhost:3000/cadastrar
```
#### Rota '/logout': Rota para fazer logout do usuário e redirecionar para a página principal.
```http
GET localhost:3000/logout
```
#### Rota '/personDetails': Rota para a página de detalhes da pessoa (autor, diretor, etc).
```http
GET localhost:3000/personDetails
```
#### Rota '/login' (método POST): Rota para autenticar o usuário. Verifica as credenciais e, se corretas, armazena o ID do 
usuário na sessão e redireciona para a página '/dashboard'. Caso contrário, redireciona de volta para a página de login com uma 
mensagem de erro.
```http
POST localhost:3000/login
```
#### Rota '/cadastro' (método POST): Rota para cadastrar um novo usuário. Verifica se o email já está cadastrado no sistema. 
Se não estiver, criptografa a senha, insere o novo usuário no banco de dados e redireciona para a página de login. Caso contrário, 
redireciona de volta para a página de cadastro com uma mensagem de erro.
```http
POST localhost:3000/cadastro
```
#### Rota '/dashboard': Rota para a página do perfil do usuário. Mostra as informações do usuário logado.
```http
GET localhost:3000/dashboard
```

#### Rota '/favoritesMovie/:id' (método POST): Rota para adicionar um filme favorito no banco de dados. O ID do filme é passado como 
parâmetro na URL.
```http
POST localhost:3000/favoritesMovie/:id
```
#### Rota '/interestList/:id' (método POST): Rota para adicionar um filme à lista de interesses no banco de dados. O ID do filme é 
passado como parâmetro na URL.
```http
POST localhost:3000/interestList/:id
```
#### Rota '/rating/:id/:note' (método POST): Rota para adicionar uma avaliação a um filme. O ID do filme e a nota são passados como 
parâmetros na URL.
```http
POST localhost:3000/rating/:id/:note
```
#### Rota '/favoritesMovie': Rota para obter a lista de IDs dos filmes favoritos do usuário logado.
```http
GET localhost:3000/favoritesMovie
```
#### Rota '/interestList': Rota para obter a lista de IDs dos filmes na lista de interesses do usuário logado.
```http
GET localhost:3000/interestList
```
#### Rota '/rating/:id': Rota para obter a nota de avaliação de um filme pelo usuário logado. O ID do filme é passado como parâmetro 
na URL.
```http
GET localhost:3000/rating/:id
```
Essas são apenas algumas das rotas definidas no servidor. O código também inclui consultas ao banco de dados para realizar operações 
como inserção, atualização e seleção de dados.

### Consumo da API
A aplicação consome a API: api.themoviedb.org/3 para obter informações sobre os filmes. Essa API fornece dados atualizados sobre filmes, incluindo detalhes, avaliações e elenco. Ao utilizar a API, a aplicação MovieFinder oferece aos usuários acesso a informações precisas e relevantes sobre os filmes em exibição.

### Funcionalidades
A seguir estão algumas das principais funcionalidades oferecidas pelo MovieFinder:

- Tela inicial: Exibe os filmes mais populares, tendências, filmes em cartaz, melhores avaliados e próximos lançamentos.

- Detalhes do filme: Ao clicar em um filme, é possível ver informações detalhadas, como pôster, nome, tempo de duração, gênero, sinopse, diretores e elenco. Os usuários também podem avaliar o filme, adicioná-lo à lista de filmes favoritos (se estiverem logados) e à lista de "assistir mais tarde" (se estiverem logados). As avaliações dos filmes também são exibidas.

- Detalhes do elenco: Ao clicar em um membro do elenco, é exibida uma página com detalhes sobre aquele autor, incluindo nome, biografia, foto, filmes em que atuou, gênero, local de nascimento e data de nascimento.

- Cadastro e login de usuários: A aplicação possui páginas de cadastro e login. O formulário de cadastro possui validações para garantir que todos os campos obrigatórios sejam preenchidos corretamente. Os dados dos usuários cadastrados são armazenados em um banco de dados MySQL.

- Gerenciamento de favoritos e lista de "assistir mais tarde": Os usuários logados podem adicionar filmes à sua lista de filmes favoritos e à lista de "assistir mais tarde". Essas informações são armazenadas no banco de dados.

- Recomendações personalizadas: Na página de perfil do usuário, são exibidas as listas de filmes favoritos e de "assistir mais tarde". Com base nos filmes presentes na lista de gostei, a aplicação oferece várias recomendações de filmes para o usuário assistir.

- Campo de busca: Existe um campo de busca na parte superior do site que permite aos usuários pesquisar por filmes específicos.

- Perfil e logout: Os usuários podem acessar seu perfil a partir de qualquer página, por meio de um botão dedicado. Também há um botão para fazer logout da aplicação.

### Banco de Dados
A aplicação utiliza um banco de dados MySQL para armazenar informações dos usuários, como nome, email, senha, filmes favoritos e filmes para assistir mais tarde. As tabelas do banco de dados são as seguintes:

```sql
CREATE DATABASE MOVIEFINDER;

USE MOVIEFINDER;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  PRIMARY KEY (id)
);

CREATE TABLE favoriteMovies(
	id INT(11) NOT NULL auto_increment,
    idMovie INT(20) NOT NULL,
    idUser INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

CREATE TABLE interestList(
	id INT(11) NOT NULL auto_increment,
    idMovie INT(20) NOT NULL,
    idUser INT(11) NOT NULL, 
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

CREATE TABLE rating(
	id INT(11) NOT NULL auto_increment,
    idMovie INT(20) NOT NULL,
    idUser INT(11) NOT NULL,
    note NUMERIC NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

```

### Executando a aplicação
- Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.
- Clone este repositótio
```bash
git clone https://github.com/Teixeira007/Movie-Finder.git
```
- Acesse o diretório do projeto:
```bash
cd MovieFinder
```
- Instale as dependências do projeto:
 ```bash
 npm install
 ```
 - Execute o servidor
 ```bash
 node index.js
 ```
 - Acesse a aplicação em seu navegador em 'http://localhost:3000'
 
### Tecnologias Utilizadas
A aplicação MovieFinder foi desenvolvida utilizando as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- MySQL
- Node.js
### Autores
- Vinicius Teixeira Fernandes
- Emilayd Sabrina Costa da Silva
