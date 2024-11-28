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

// Editar um usuario.
cadastroRoutes.put("/:id", (req, res) => {
    const { id  } = req.params;

// Verifica se o usuário existe.
    const usuario = cadastros.find(cadastro => cadastro.id === id);

    // Se não existir, retorna 404.
    if (!usuario) {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
        return;
    }
// Verifica se o usuário está logado.
    const { nome, grupo, apelido, local, estaVivo, senha} = req.body;

    // Verifica se todos os campos estão preenchidos.
    if (!nome || !grupo || !apelido || !local || !estaVivo || !senha) { 
        res.status(400).json({ mensagem: "Preencha todos os campos." });
        return;
    }    

    // Atualiza os dados do usuário.
    usuario.nome = nome;
    usuario.grupo = grupo;
    usuario.apelido = apelido;
    usuario.local = local;
    usuario.estaVivo = estaVivo;
    usuario.senha = senha;

    // Retorna o usuário atualizado.
    return res.status(200).send({
        message: "Usuário atualizado com sucesso."  ,
        usuario,
    })
});

cadastroRoutes.delete("/remover", (req, res) => {

});
});

export default cadastroRoutes;