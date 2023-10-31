const { ConnectionStates } = require("mongoose");
const serviceModel = require("../models/service");

const createService = async(req,res) => {
    try {
        const serviceData = req.body;
        console.log(serviceData);
        const newService = new serviceModel({...serviceData});
        console.log(newService);
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: `no se pudo crear el servicio: ${err.message}`});
    }
}

const getAllServices = async(req,res) => {
    try {
        const allServices = await serviceModel.find();
        res.status(200).json(allServices);
    } catch (err) {
        res.status(400).json({ message: `no se pueden listar los servicios: ${err.message}`})
    }
}

const getServiceById = async(req,res) => {
    try {
        const {id} = req.params;
        const response = await serviceModel.findById(id);
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({ message: `no se puede mostrar el servicio: ${err.message}`})
    }
}

const updateServiceById = async(req,res) => {
    try {
        const {id} = req.params;
        const serviceDataEdit = req.body;
        const response = await serviceModel.findByIdAndUpdate(id,serviceDataEdit);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({ message: `no se puede actualizar el servicio: ${err.message}`})
    }
}

const deleteServiceById = async(req,res) => {
    try {
        const {id} = req.params;
        const service = await serviceModel.findById(id);
        if(!service){
            console.log(`el servicio con id ${id} no existe, por lo tanto no se puede eliminar`);
            return res.status(404).json({message: `el servicio con id ${id} no existe`});
        }
        const response = await serviceModel.findByIdAndDelete(id);
        res.status(200).json({ message: "ususario eliminado exitosamente"});
    } catch (err) {
        res.status(400).json({ message: `no se pudo eliminar el servicio: ${err.message}`});
    }
}

module.exports = {
    createService,
    getAllServices,
    getServiceById,
    updateServiceById,
    deleteServiceById
}