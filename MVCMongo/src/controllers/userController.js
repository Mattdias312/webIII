var User = require('../models/userModel');

exports.getUser = async function (req, res) {
    /* #swagger.tags = ['User']
       #swagger.summary = 'Lista todos os usuários cadastrados'
       #swagger.description = 'Este endpoint lista todos os usuários cadastrados contendo nome e idade'*/
    try{
        const result = await User.find();
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res){
    /* #swagger.tags = ['User']
       #swagger.summary = 'Cadastra um usuário'
       #swagger.description = 'Cria um usuário adicionando um nome e idade'*/
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    user.save().then(res.status(201).send(user.toJSON()))
    .catch((err) => {
        res.status(500).send({message: `${err.message} - falha ao cadastrar usuário`})
    })
};

exports.details = async function (req, res) {
    /* #swagger.tags = ['User']
       #swagger.summary = 'Pesquisa um usuário'
       #swagger.description = 'Pesquisa um usuário pelo id'*/
    try{
        const result = await User.findById(req.body.id);
        res.status(200).json(result);
    } catch(err) {
        res.status(500).json(err);
    }
};

exports.updateUser = async function (req, res) {
    /* #swagger.tags = ['User']
       #swagger.summary = 'Altera informções de um usuário'
       #swagger.description = 'Altera informções de um usuário passando o id'*/
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ message: "Usuário não encontrado!" });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: `Erro ao atualizar usuário: ${err.message}` });
    }
};

exports.deleteUser = async function (req, res) {
    /* #swagger.tags = ['User']
       #swagger.summary = 'Deleta um usuário'
       #swagger.description = 'Deleta um usuário passando o id'*/
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send({ message: "Usuário não encontrado!" });
        }
        res.status(200).send({ message: "Usuário removido com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: `Erro ao remover usuário: ${err.message}` });
    }
};
