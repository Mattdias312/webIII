var Project = require('../models/projectModel');

exports.getProject = async function (req, res){
    /* #swagger.tags = ['Project']
       #swagger.summary = 'Lista todos os projetos cadastrados'
       #swagger.description = 'Este endpoint lista todos os projetos cadastrados contendo título, descrição e autor'*/
    try{
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res){
    /* #swagger.tags = ['Project']
       #swagger.summary = 'Cadastra um projeto'
       #swagger.description = 'Cria um cadastro adicionando um título, descrição e autor'*/
    let project = new Project(
        {
            title: req.body.title,
            description: req.body.description,
            assignedTo: req.body.assignedTo
        }
    );
    project.save()
    .then(res.status(201).send(project.toJSON()))
    .catch((err) => {
        res.status(500).send({message: `${err.message} - falha ao cadastrar projeto`})
    })
};

exports.details = async function (req, res) {
    /* #swagger.tags = ['Project']
       #swagger.summary = 'Pesquisa um projeto'
       #swagger.description = 'Pesquisa um projeto pelo id'*/
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result)
    }catch (err) {
        res.status(500).json(err);
    }
};

exports.updateProject = async function (req, res) {
    /* #swagger.tags = ['Project']
       #swagger.summary = 'Altera informções de um projeto'
       #swagger.description = 'Altera informações de um projeto passando o id'*/
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).send({ message: "Projeto não encontrado!" });
        }
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ message: `Erro ao atualizar projeto: ${err.message}` });
    }
};

exports.deleteProject = async function (req, res) {
    /* #swagger.tags = ['Project']
       #swagger.summary = 'Deleta um projeto'
       #swagger.description = 'Deleta um projeto pelo id'*/
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).send({ message: "Projeto não encontrado!" });
        }
        res.status(200).send({ message: "Projeto removido com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: `Erro ao remover projeto: ${err.message}` });
    }
};