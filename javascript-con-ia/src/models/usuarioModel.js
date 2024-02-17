const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  id: String,
  // Agrega otros campos necesarios para tu modelo de usuario
}, { collection: 'usuarios' }); // Cambié el nombre de la colección a 'usuarios'

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
