const { Router } = require('express');
const { criar, listar, listarLivro, editar, excluir } = require('../controllers/livroController');

const router = Router();

router.post("/", criar);

router.get("/", listar)

router.get("/:id", listarLivro)

router.put("/:id", editar)

router.delete("/:id", excluir)

module.exports = router;