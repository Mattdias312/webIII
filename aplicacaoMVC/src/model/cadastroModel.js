const cadastros = []

module.exports = class CadastroModel{

    listarCadastros(){
            return cadastros
    }

    addCadastro(nome,email){
        cadastros.push({nome,email})
    }

    removeCadastro(email){
        const index = cadastros.findIndex(c => c.email === email);
    if (index !== -1) {
        cadastros.splice(index, 1);
    }
    }
}