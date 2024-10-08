 
const Funcionario = require('../models/Funcionario');

exports.register = async (req, res) => {
  const { nome, cargo, email, senha } = req.body;
  const funcionario = new Funcionario({ nome, cargo, email, senha });
  await funcionario.save();
  res.status(201).send('Funcionário registrado com sucesso');
};
