const alunos = [
    {
        'nome': 'Daniela',
        'idade': 17
    },
    {
        'nome': 'João',
        'idade': 21
    },
    {
        'nome': 'Pedro',
        'idade': 25
    }
]
module.exports = class alunoModel{
    constructor() {}
    
    listarAlunos(){

      return alunos;
    }

    addAluno(nome, idade){
        alunos.push({nome, idade})
    }
}
