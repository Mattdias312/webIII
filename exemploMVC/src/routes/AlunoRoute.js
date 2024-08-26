const express = require('express')
const router = express.Router()

const alunosController = require('../controllers/AlunosController')
router.get("/alunos",alunosController.aluno)
router.get("/alunos/getAll",alunosController.alunoGetAll)
router.get("/alunos/save",alunosController.alunoForm)
router.post("/alunos/save",alunosController.alunoSave)
module.exports = router