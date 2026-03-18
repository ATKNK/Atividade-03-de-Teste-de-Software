const { Livro } = require('../models');

const criarLivro = async (titulo, autor) => {
  const livro = await Livro.create({ titulo, autor });
  return {
    id: livro.id,
    titulo: livro.titulo,
    autor: livro.autor,
  };
};

const listarLivros = async () => {
  const livros = await Livro.findAll();
  return livros;
}

const listaLivro = async (id) => {
  return await Livro.findByPk(id); 
}

module.exports = { criarLivro, listarLivros, listaLivro };