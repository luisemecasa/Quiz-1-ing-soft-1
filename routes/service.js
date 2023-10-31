const serviceController = require("../controllers/service")
const express = require("express");

const router = express.Router();

// http://localhost:3100/api/v1/service/new-service
router.post("/new-service", serviceController.createService);

// http://localhost:3100/api/v1/users/
router.get("/", serviceController.getAllServices);

// http://localhost:3100/api/v1/users/new-user?id=****
router.get("/:id", serviceController.getServiceById);

// http://localhost:3100/api/v1/users/new-user?id=****
router.patch("/:id", serviceController.updateServiceById);


// http://localhost:3100/api/v1/users/new-user?id=****
router.delete("/:id", serviceController.deleteServiceById);

module.exports = router;