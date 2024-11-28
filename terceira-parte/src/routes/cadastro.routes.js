import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {

const cadastros = [
    {
        id: 1,
        nome: "Luiz",
        email: "luiz@gmail.com"
    },
];
cadastroRoutes.post("/adicionar", (req, res) => {
    const { nome, email } = req.body;
    const id = cadastros.length + 1;
    
    const usuario = {
        id,
        nome,
        email
    };
    
    cadastros.push(usuario);
});

cadastroRoutes.get("/listar", (req, res) => {

});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;