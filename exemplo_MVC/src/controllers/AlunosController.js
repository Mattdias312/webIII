const alunoModel = require('../model/AlunosModel')

exports.aluno = ((req, resp)=>{
    resp.send('<h1>Alunos Works!</h1>')
})
exports.alunoGetAll = ((req, resp)=>{
    const listaAlunos = new alunoModel()
    listaAlunos.alunos.forEach(aluno => {
        resp.send(`<h1>${aluno.nome}</h1><h1>${aluno.idade}</h1>`)        
    });
})