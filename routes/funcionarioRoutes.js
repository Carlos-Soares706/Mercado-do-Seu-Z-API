 
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', funcionarioController.register);

module.exports = router;
