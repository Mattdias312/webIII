const { vary } = require('express/lib/response')
const alunoModel = require('../model/AlunosModel')
const listaAlunos = new alunoModel() 
const lista = listaAlunos.listarAlunos()

exports.aluno = ((req, resp)=>{
    resp.send('<h1>Alunos Works!</h1>')
})
exports.alunoGetAll = ((req, resp)=>{
    resp.render("Alunos/alunosView",{lista : lista})
})
exports.alunoForm = ((req, resp)=>{
    resp.render("Alunos/alunosFormView",{lista : lista})
})
exports.alunoSave = ((req, resp)=>{
    if (req.body) {
    console.log('body',req.body)
    let { nome, idade } = req.body;
    
    listaAlunos.addAluno(nome, idade);

    resp.redirect('/alunos');
    }else{
        resp.status(400).send('Requisição sem corpo.');
    }

})

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));