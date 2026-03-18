const { Router } = require('express');
const { criar, listar, listarLivro } = require('../controllers/livroController');

const router = Router();

router.post("/", criar);

router.get("/", listar)

router.get("/:id", listarLivro)

module.exports = router;