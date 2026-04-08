const { criarUsuario, listarUsuario, listarUsuarios, editarUsuario, excluirUsuario } = require('../services/usuarioService');

const criar = async (req, res) => {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha || !tipo) {
        return res.status(400).json({ error: 'todos os campos são obrigatórios' })
    }

    const usuario = await criarUsuario(nome, email, senha, tipo);
    res.status(201).json(usuario);
}

const listarTodos = async (req, res) => {
    const usuarios = await listarUsuarios();
    return res.status(200).json(usuarios);
}

const listar = async (req, res) => {
    const id = req.params.id;
    const usuario = await listarUsuario(id);
    if (!usuario) {
        return res.status(404).json({ message: "usuário não encontrado" })
    }
    return res.status(200).json(usuario);
}

const editar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, senha, tipo } = req.body;

        if (!nome || !email || !senha || !tipo) {
            return res.status(400).json({ error: 'todos os campos são obrigatórios' })
        }
        const usuario = await editarUsuario(nome, email, senha, tipo, id);
        if (!usuario) {
            return res.status(404);
        }
        console.log(usuario)

        return res.status(200).json(usuario);
    } catch (error) {
        const status = error.message === 'Usuário não encontrado' ? 404 : 400;
        res.status(status).json({erro: error.message})
    }
}

const excluir = async (req, res) => {
    const { id } = req.params;
    const usuario = await excluirUsuario(id);

    return res.status(204).json(usuario)
}

module.exports = { criar, listarTodos, listar, editar, excluir };