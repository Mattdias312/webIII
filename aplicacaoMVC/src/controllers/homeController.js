const cadastroModel = require('../model/cadastroModel');
const listacadastros = new cadastroModel();
const lista = listacadastros.listarCadastros();

exports.home = (req, res) => {
    /* #swagger.tags = ['home']
       #swagger.summary = 'Mostra informações sobre Stray code, formulário e número de cadastros'
       #swagger.description = 'Este endpoint mostra informações sobre Stray code, formulário para novos cadastros e número de usuários cadastrados*/
    res.render("index", { lista: lista, totalCadastro: lista.length });
};

exports.save = (req, res) => {
    /* #swagger.tags = ['cadastro']
       #swagger.summary = 'chama método para savar novo usuário'
       #swagger.description = 'Este endpoint pega as informações do formulário para criar novo cadastro*/
    if (req.body) {
        let { nome, email } = req.body;
        listacadastros.addCadastro(nome, email);
        res.redirect('/home');
    } else {
        res.status(400).send('Requisição sem corpo.');
    }
};

exports.excluirCadastro = (req, res) => {
    /* #swagger.tags = ['cadastro']
       #swagger.summary = 'chama método para excluir usuário'
       #swagger.description = 'Este endpoint pega o email do usuário para excluir cadastro*/
    const { email } = req.params;
    listacadastros.removeCadastro(email);
    res.redirect('/home');
};

exports.qtd = (req, res) => {
    res.render("index", { lista: lista, totalCadastro: lista.length });
}