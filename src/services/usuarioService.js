const { Usuario } = require('../models');

const criarUsuario = async (nome, email, senha, tipo) => {
    const usuario = await Usuario.create({ nome, email, senha, tipo });
    return {
        id: usuario.id,
        nome: usuario.nome,
        senha: usuario.senha,
        tipo: usuario.tipo
    };
};

const listarUsuarios = async () => {
    const usuarios = await Usuario.findAll();
    return usuarios;
}

const listarUsuario = async (id) => {
  const usuario = await Usuario.findByPk(id);
  return usuario;
}

const editarUsuario = async (nome, email, senha, tipo, id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    await usuario.update({nome, email, senha, tipo });
    return {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        tipo: usuario.tipo
    };
}

const excluirUsuario = async (id) => {
    await Usuario.destroy({ where: { id } })
}

module.exports = { criarUsuario, listarUsuario, listarUsuarios, editarUsuario, excluirUsuario };