const { Router } = require('express');
const { criar, listarTodos, listar, editar, excluir } = require('../controllers/usuarioController');

const router = Router();

router.post("/", criar);

router.get("/", listarTodos)

router.get("/:id", listar)

router.put("/:id", editar)

router.delete("/:id", excluir)

module.exports = router;