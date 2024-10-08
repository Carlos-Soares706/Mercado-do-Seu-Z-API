 
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, produtoController.create);
router.get('/', produtoController.getAll);

module.exports = router;
