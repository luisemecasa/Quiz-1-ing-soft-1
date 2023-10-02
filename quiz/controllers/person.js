const personModel = require("../models/person");
const createPerson = async (req, res) => {
  try {
    const personData = req.body;
    console.log(personData);
    const newPerson = new personModel({ ...personData });
    console.log(newPerson);
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const allPersons = await personModel.find();
    res.status(200).json(allPersons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getPersonById = async (req, res) => {
  try {
    const id = req.param;
    const response = await personModel.findById(id);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePersonById = async (req, res) => {
  try {
    const  id  = req.params;
    const personData = req.body;
    const response = await personModel.findByIdAndUpdate(id, personData);
    res.status(200).json("EXITOSO");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deletePersonsById = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await personModel.findByIdAndDelete(id);
    res.status(200).json({message: "usuario eliminado existosamente"});

  } catch (error) {
    res.status(400).json({message: error.message})
    
  }
}


module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePersonById,
  deletePersonsById
};
