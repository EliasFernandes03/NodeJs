# Clone o projeto
`git clone https://github.com/EliasFernandes03/NodeJs.git`

# Instale o Insomnia ou Postman


# Npm install no projeto

Dentro do diretorio raiz faca `npm install`

# Compile o codigo

 Dentro da pasta raiz do projeto `tsc`

# Suba o servidor

Abra um terminal na pasta dist do projeto `node server.js`

# Teste as requisicoes

## Rename

Na requisicao rename voce ira criar uma http request no insomnia e selecionar o tipo post(sim, post mesmo) e coloque essa rota  passando este json:
` http://localhost:3000/rename `
{
  "oldName": "bag2.txt",
  "newName": "bolinha123.txt",
  "dirPath": "../files/"
} 

## Listar
Na requisicao rename voce ira criar uma http request no insomnia e selecionar o tipo get e coloque essa rota:

`http://localhost:3000/files`

Retornara uma lista de arquivos dentro deste diretorio

## Delete

Na requisicao rename voce ira criar uma http request no insomnia e selecionar o tipo delete e coloque essa rota:

`http://localhost:3000/files/`

Depois da ultima barra coloque o arquivo que deseja deletar, como por exemplo bag3.txt. 

## Listar um 

Na requisicao rename voce ira criar uma http request no insomnia e selecionar o tipo get e coloque essa rota:

`http://localhost:3000/files/`

Depois da ultima barra coloque o arquivo que deseja buscar, como por exemplo bag3.txt. Essa requisicao ira retornar o conteudo dentro daquele arquivo selecionado.