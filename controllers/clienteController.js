 
const Cliente = require('../models/Cliente');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);

  const cliente = new Cliente({ nome, email, senha: hashedPassword });
  await cliente.save();
  res.status(201).send('Cliente registrado com sucesso');
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const cliente = await Cliente.findOne({ email });

  if (!cliente || !(await bcrypt.compare(senha, cliente.senha))) {
    return res.status(401).send('Credenciais inválidas');
  }

  const token = jwt.sign({ id: cliente._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
