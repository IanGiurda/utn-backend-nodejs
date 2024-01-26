const {Schema, model} = require("mongoose")
require("../mongo");


//Damos los campos del esquema
const bookSchema = Schema({
    title : String,
    release : Number,
    author : String
});

//Nombramos el modelo
const Book = model("book", bookSchema)

//exportamos el modelo
module.exports = Book