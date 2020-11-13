const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/todos", controller.getAll) // http://localhost:3030/contatos/todos/
router.get("/nome",controller.getByName) // enviar info pelo params http://localhost:3030/contatos/nome/?Fernanda
router.get("/id",controller.getById) // http://localhost:3030/contatos/id/?5fac91a2feab4e1c589fe4a4
router.post("/criar", controller.addContato) // enviar informação pelo body http://localhost:3030/contatos/criar/
router.delete("/deletar", controller.deleteContato)

module.exports = router