// Routes/index.js
const express = require('express') 
const router = express.Router()

//importrar el controller
const CalculadoraController = require('../controllers/controller')

//ruta de vista
router.get('/', CalculadoraController.getVista)

module.exports = router;