const { criarLivro, listarLivros } = require('../services/livroService');

const criar = async (req, res) => {
    const { titulo, autor } = req.body;

    if (!titulo || !autor) return res.status(400)
        .json({ erro: 'titulo e autor são obrigatórios'})

    const livro = await criarLivro(titulo, autor);
    res.status(201).json(livro);
}

const listar = async (req, res) => {
    const livros = await listarLivros();
    return res.status(200).json(livros);
    
}

module.exports = { criar, listar };