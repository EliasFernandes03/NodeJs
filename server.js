const express = require('express');

const fileRouter = require('./infrastructure/services/customer/router');

//aqui a gente inicia o express
const app = express();

//definindo o tipo de dado que vai ficar saindo e chegando da API
app.use(express.json()); 

//adicionando as rotas servidor
app.use(fileRouter);



//port
const port = 8000;

//every request will pass here
function main() {
    console.log('API rodando no endereço http://localhost:'+port);
}

//open the server
app.listen(port, main);