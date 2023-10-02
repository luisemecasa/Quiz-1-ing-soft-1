const personController = require("../controllers/person");
const express = require("express");

const router = express.Router();


router.post("/new-person", personController.createPerson);

router.get("/", personController.getAllPersons);

router.get("/:id", personController.getPersonById);

router.patch("/:id", personController.updatePersonById);

router.delete("/:id", personController.deletePersonsById);

module.exports = router;
