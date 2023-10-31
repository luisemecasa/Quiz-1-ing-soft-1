const concesionariaModel = require('../models/consecionaria')
const createConcesionario = async (req, res) => {
    try {
        const serviceData = req.body;
        console.log(serviceData);
        const newService = new concesionariaModel({...serviceData});
        console.log(newService);
        await newService.save();
        res.status(201).json(newService)
    } catch (err) {
      res.status(500).json({ error: `Error al crear la concesionaria y agregar el vehículo.  ${err.message}` });
    }
  }

const getConsecionario = async(req,res) => {
    try {
        const consecionaria = await concesionariaModel.find();
        res.status(200).json(consecionaria);
    } catch (err) {
        res.status(400).json({ message: `no se pueden listar los servicios: ${err.message}`})
    }
}

const getConsecionariobyId = async(req,res) => {
    try {
        const {id} = req.params;
        const response = await concesionariaModel.findById(id);
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({ message: `no se puede mostrar el consecionario: ${err.message}`})
    }
}


module.exports ={
    createConcesionario,
    getConsecionario,
    getConsecionariobyId,
}