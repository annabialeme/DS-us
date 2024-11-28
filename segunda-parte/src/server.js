import express from "express"; // importe do express para criar o servidor
import routes from "../routes/index.routes.js"; // import do arquivo routes


import { config } from "dotenv";    //chamando tudo do .env
config(); // carrega as variáveis de ambiente .env

const app = express(); // criando uma instância do express

const serverPort = process.env.PORT || 3000; // usando a porta padrão setado no arquivo .env ou 3000 como padrão

app.use(express.json()); // configurar middleware para JSON, permitindo que o server entenda requisições em JSON

app.use(routes); // configurar a middleware de rotas, permite que o server use as rotas do arquivo routes

// iniciando o servidor
app.listen(serverPort, () => {
console.log(`⚡ Server started on http://localhost:${serverPort}`);
});


//Eu luiz alterei a rota do npm no package.json para rodar o server.js pois a src estava na pasta segunda parte não na raiz então o código não rodava 
