import { Router } from "express"; // Importa o Router do express
import cadastroRoutes from "./cadastro.routes.js"; // Importa as rotas de cadastro
const rotas = Router();// Cria uma instância de Router

rotas.get("/", (req, res) => { // Rota raiz
  res.status(200).send("Servidor rodando e pronto para uso!"); // status 200 e mensagem de servidor rodando
});


rotas.use("/", cadastroRoutes); // Usa as rotas de cadastro


rotas.use((req, res) => { 
  res.status(404).json({ message: "Rota não encontrada." }); // retorna status 404 e mensagem de rota não encontrada
});


export default rotas; // Exporta as rotas para serem usadas em outros arquivos