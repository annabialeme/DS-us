import { Router } from "express";

const cadastroRoutes = Router();


cadastroRoutes.post("/adicionar", (req, res) => {
    const cadastros = [
        {
            id: 1,
            nome: "Luiz",
            email: "luiz@gmail.com",
            senha: "123"
        },
    ];

    const { nome, email, senha } = req.body;
    const id = cadastros.length + 1;
    
    const usuario = {
        id,
        nome,
        email,
        senha
    };
    
    cadastros.push(usuario);
    return res.status(201).json(cadastros);
});

cadastroRoutes.get("/listar", (req, res) => {

});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;