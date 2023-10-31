const concesionarioController = require("../controllers/concesionario")
const express = require("express");

const router = express.Router();

// http://localhost:3100/api/v1/concesionaria/new-concesionara
router.post("/new-concesionario", concesionarioController.createConcesionario);

// http://localhost:3100/api/v1/concesionaria/
router.get("/", concesionarioController.getConsecionario);

// http://localhost:3100/api/v1/concesionaria/:id
router.get("/:id", concesionarioController.getConsecionariobyId);


module.exports = router;