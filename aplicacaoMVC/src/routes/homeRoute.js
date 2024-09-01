const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
router.get("/home", homeController.home);
router.get('/home/show', homeController.show);
router.get('/home/hide', homeController.hide);
router.post('/home/save', homeController.save);
router.post('/excluir/:email', homeController.excluirCadastro);
router.delete('/excluir/:email', homeController.excluirCadastro);

module.exports = router;
