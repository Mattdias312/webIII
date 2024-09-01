const cadastroModel = require('../model/cadastroModel');
const listacadastros = new cadastroModel();
const lista = listacadastros.listarCadastros();

exports.home = (req, res) => {
    console.log(lista.length)
    res.render("index", { showForm: true, lista: lista, totalCadastro: lista.length });
};

exports.show = (req, res) => {
    res.render("index", { showForm: true });
};

exports.hide = (req, res) => {
    res.render("index", { showForm: false });
};

exports.save = (req, res) => {
    if (req.body) {
        let { nome, email } = req.body;
        listacadastros.addCadastro(nome, email);
        res.redirect('/home');
    } else {
        res.status(400).send('Requisição sem corpo.');
    }
};

exports.excluirCadastro = (req, res) => {
    const { email } = req.params;
    listacadastros.removeCadastro(email);
    res.redirect('/home');
};
