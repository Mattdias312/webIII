const express = require('express')
const router = express.Router()

const alunosController = require('../controllers/AlunosController')
router.get("/alunos",alunosController.aluno)
router.get("/alunos/getAll",alunosController.alunoGetAll)
module.exports = router