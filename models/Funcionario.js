const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cargo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);
