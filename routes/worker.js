const workerController = require("../controllers/worker");
const express = require("express");

const router = express.Router();


router.post("/new-worker", workerController.createWorker);

router.get("/", workerController.getallWorkers);

router.get("/:id", workerController.getWorkerbyId);

router.put("/:id", workerController.updateWorkerById);

router.delete("/:id", workerController.deleteWorkersById);

module.exports = router;
