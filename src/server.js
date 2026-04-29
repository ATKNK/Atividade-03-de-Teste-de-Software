require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 3000;

const { Livro, Usuario } = require('./models');

async function seedDefaults() {
    try {
        const livro = await Livro.findByPk(68);
        if (!livro) {
            await Livro.create({ id: 68, titulo: 'Clean Code', autor: 'Martin Code' });
            console.log('Seeded livro id 68');
        }

        const usuario = await Usuario.findByPk(1);
        if (!usuario) {
            await Usuario.create({ id: 1, nome: 'Usuario Teste', email: 'teste@example.com', senha: '123456', tipo: 'aluno' });
            console.log('Seeded usuario id 1');
        }
    } catch (err) {
        console.error('Seeding error:', err.message || err);
    }
}

seedDefaults().then(() => {
    app.listen(PORT, () => {
        console.log(`Rodando na porta ${PORT}`);
    });
});