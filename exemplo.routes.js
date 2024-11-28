//Rota para deletar um usuario
cadastroRoutes.delete("/remover", (req, res) => {
    const { id } = req.params;

//Busca um usuario pelo id no array de usuarios
    const usuario = usuario.find((usuario) => usuario.id == id);

    if (!usuario) {
        return res.status(404).json({ message: `Usuario com id ${id} não encontrado!` });
}

//Remove o usuario do array de usuarios
usuario = usuario.filter((usuario) => usuario.id != id);

return res.status(200).json({ message: "Usuário removido com sucesso!",
    usuario,
 });
});

export default cadastroRoutes;