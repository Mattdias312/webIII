const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
router.get("/home", homeController.home);
router.get("/qtd", homeController.home);
router.post('/home/save', homeController.save);
router.delete('/excluir/:email', homeController.excluirCadastro);


module.exports = router;
