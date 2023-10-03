const workerModel = require("../models/worker");
const createWorker = async (req, res) => {
  try {
    const workerData = req.body;
    console.log(workerData);
    const newWorker = new workerModel({ ...workerData });
    console.log(newWorker);
    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getallWorkers = async (req, res) => {
  try {
    const allWorkers = await workerModel.find();
    res.status(200).json(allWorkers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getWorkerbyId = async (req, res) => {
  try {
    const id = req.param;
    const response = await workerModel.findById(id);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const workerData = req.body;
    const response = await workerModel.findByIdAndUpdate(id, workerData);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteWorkersById = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await workerModel.findByIdAndDelete(id);
    res.status(200).json({message: "usuario eliminado existosamente"});

  } catch (error) {
    res.status(400).json({message: error.message})
    
  }
}


module.exports = {
  createWorker,
  getallWorkers,
  getWorkerbyId,
  updateWorkerById,
  deleteWorkersById
};
