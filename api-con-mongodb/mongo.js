//importamos mongoose
const mongoose = require("mongoose")

//Conectamos moongoose a la base de datos de mongoDB
const connectionString = "mongodb://localhost:27017/biblioteca"
mongoose.connect(connectionString) //     {useUnifiedTopology : true, useNewUrlParser : true} es una opcion deprecada segun la terminal
    .then(() => {
        console.log("Base de Datos conectada correctamente")
    })
    .catch(err =>{
        console.error(err)
    })