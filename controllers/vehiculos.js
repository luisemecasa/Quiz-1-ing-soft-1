const Concesionaria = require("../models/consecionaria");
const Vehiculo = require("../models/vehiculos");

const createVehiculo = async (req, res) => {
  try {
    const id = req.params.id;
    const concesionaria = await Concesionaria.findById(id);
    if (!concesionaria) {
      return res.status(404).json({ error: "Concesionaria no encontrada." });
    }
    const vehicleData = req.body;
    const newVehicle = new Vehiculo({ ...vehicleData });
    concesionaria.vehiculos.push(newVehicle);
    await concesionaria.save();
    res.status(200).json(concesionaria);
  } catch (error) {
    res
      .status(400)
      .json({ error: `Error al agregar el vehículo. ${error.message}` });
  }
};

const getVehiculos = async (req, res) => {
  try {
    const id = req.params.id; 
    const concesionaria = await Concesionaria.findById(id);
    if (!concesionaria) {
      return res.status(404).json({ error: "Concesionaria no encontrada." });
    }
    const vehiculos = concesionaria.vehiculos; 
    res.status(200).json(vehiculos);
  } catch (error) {
    res
      .status(400)
      .json({ error: `Error al obtener los vehículos. ${error.message}` });
  }
};

const getVehiculosPorMarca = async (req, res) => {
  try {
    const concesionariaId = req.params.id;
    const marca = req.params.marca; 
    const concesionaria = await Concesionaria.findById(concesionariaId);

    if (!concesionaria) {
      return res.status(404).json({ error: 'Concesionaria no encontrada.' });
    }
    const vehiculos = concesionaria.vehiculos.filter((vehiculo) => vehiculo.marca === marca);
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(400).json({ error: `Error al obtener vehículos por marca. ${error.message}` });
  }
};


module.exports = {
  createVehiculo,
  getVehiculos,
  getVehiculosPorMarca,
};
