const express = require("express");
const cors = require('cors');

// app puede conectar por el puerto local el express
// especificar lps middleware a utilizars
const app = express();
const serviceRoutes = require("./routes/service")
const authRoutes = require("./routes/auth")
const concesionarioRoutes = require("./routes/concesionario")
const vehiculoRoutes = require("./routes/vehiculos")
const userRoutes = require("./routes/user")
const API_VERSION = 'api/v1'

// pruebas con extension REST client
app.use(express.json());

//pruebas desde postman
app.use(express.urlencoded({ extended: true }));

app.use(cors())

// http://localhost:3100/api/v1/services/
app.use(`/${API_VERSION}/services`, serviceRoutes);

// http://localhost:3100/api/v1/auth/signin
app.use(`/${API_VERSION}/auth`, authRoutes);

app.use(`/${API_VERSION}/concesionaria`, concesionarioRoutes);

app.use(`/${API_VERSION}/vehiculos`, vehiculoRoutes);

app.use(`/${API_VERSION}/users`, userRoutes);

module.exports = app;
