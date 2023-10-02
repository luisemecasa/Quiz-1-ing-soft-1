const express = require("express");
const app = express();
const personRoute = require("./routes/person");
const API_VERSION = "api/v1";
//App puede conectar con el puerto local el express
// especificiar los middleware a utilizar
// generador de modelo se lo manda a generar controlador controlador a rutas y rutas a index.js
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(`/${API_VERSION}/person`, personRoute);
module.exports = app;
