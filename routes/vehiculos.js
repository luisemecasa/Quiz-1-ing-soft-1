const vehiculosController = require("../controllers/vehiculos")
const express = require("express");

const router = express.Router();

// http://localhost:3100/api/v1/concesionaria/new-concesionara
router.post("/new-vehiculo/:id", vehiculosController.createVehiculo);

// http://localhost:3100/api/v1/concesionaria/
router.get("/get-vehiculos/:id", vehiculosController.getVehiculos);

// http://localhost:3100/api/v1/concesionaria/:id
router.get("/get-marca/:id/:marca", vehiculosController.getVehiculosPorMarca);


module.exports = router;