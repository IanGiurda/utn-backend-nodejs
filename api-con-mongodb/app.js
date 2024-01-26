// (commonJS) importamos express y lo instanciamos en la variable app
const express = require("express")
const app = express()

//importamos el router (contiene operaciones CRUD y rutas)
const routerBook = require("./routes/books");

// configuramos la interpretacion de los bodys como formato json
app.use(express.json());

// establecemos el router en la ruta /books
app.use("/books",routerBook);

//Iniciamos el servidor
app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});

