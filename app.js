 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const clienteRoutes = require('./routes/clienteRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

app.use('/clientes', clienteRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/produtos', produtoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
