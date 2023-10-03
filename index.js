const mongoose= require('mongoose')
const app = require('./app')
const {DB_HOST,DB_USER,DB_PASSWORD}=require("./config")
//Acceder a la configuración del archivo
require("dotenv").config()
// Acceder a variables del .env se usa procces.env.NOMBRE DE LA VARIABLE  (Puerto de conexion)
const port = process.env.PORT || app

app.listen(port,()=>console.log(`Conectados por el puerto ${port}`))
//Crear conexion a base de datos (bd) Mongo
//mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`).then(()=>console.log("Conectado a mongoDB")).catch((err)=>console.error(`error al conectar ${err}`))