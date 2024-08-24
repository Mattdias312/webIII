const alunoModel = require('../model/AlunosModel')

exports.aluno = ((req, resp)=>{
    resp.send('<h1>Alunos Works!</h1>')
})
exports.alunoGetAll = ((req, resp)=>{
    const listaAlunos = new alunoModel()
    resp.render("Alunos/alunosView",{lista : listaAlunos.listarAlunos})
})