const express = require("express");
const controller = require("../controllers/categoriaController");
const router = express.Router();
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
module.exports = router;
