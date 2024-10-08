 
const Produto = require('../models/Produto');

exports.create = async (req, res) => {
  const { nome, preco, descricao, quantidade } = req.body;
  const produto = new Produto({ nome, preco, descricao, quantidade });
  await produto.save();
  res.status(201).send('Produto criado com sucesso');
};

exports.getAll = async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
};
