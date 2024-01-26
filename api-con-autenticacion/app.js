
const express = require("express");
const mongoose= require("mongoose");

const { auth } = require('express-oauth2-jwt-bearer');

const app = express();

const jwtCheck = auth({
    audience: 'http://localhost:3000/api/books',
    issuerBaseURL: 'https://dev-4agmfne3shgno5bm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });




app.use(express.json());

const bookRouter = require("./routes/books");
const errorHandler = require('./middlewares/errorHandler');

app.use("/api/books", jwtCheck, bookRouter); // se establece que el router maneja todas las rutas que empiecen con "/libros"


app.use(errorHandler); // se establece errorHandler para manejar errores en toda la aplicacion

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});