import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/", (req, res) => {
    const { nome, email, senha } = req.body;

});

cadastroRoutes.get("/listar", (req, res) => {

});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;