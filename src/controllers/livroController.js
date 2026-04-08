const { criarLivro, listarLivros, listaLivro, editarLivro, excluirLivro } = require('../services/livroService');

const criar = async (req, res) => {
    const { titulo, autor } = req.body;

    if (!titulo || !autor) return res.status(400)
        .json({ erro: 'titulo e autor são obrigatórios' })

    const livro = await criarLivro(titulo, autor);
    res.status(201).json(livro);
}

const listar = async (req, res) => {
    const livros = await listarLivros();
    return res.status(200).json(livros);

}

const listarLivro = async (req, res) => {
    const id = req.params.id;
    const livro = await listaLivro(id)
    return res.status(200).json(livro);
}

const editar = async (req, res) => {
    const { id } = req.params;
    const { titulo, autor } = req.body;

    if (!titulo || !autor) return res.status(400)
        .json({ erro: 'titulo e autor são obrigatórios' })

    const livro = await editarLivro(titulo, autor, id);

    return res.status(200).json(livro);
}

const excluir = async (req, res) => {
    const { id } = req.params;
    const livro = await excluirLivro(id);

    return res.status(204).json(livro)
}

module.exports = { criar, listar, listarLivro, editar, excluir };