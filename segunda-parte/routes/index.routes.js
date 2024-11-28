import { Router } from 'express';// importa o modulo ROUTER do express

const routes = Router();// cria uma instância do Router

routes.get('/', (req, res) => { //define uma rota get para a raiz do servidor
    return res.status(200).json({ message: 'Hello world!' }); // retorna um JSON com a mensagem "Hello world!"
});

export default routes;  // exporta as rotas para serem usadas em outro arquivo
