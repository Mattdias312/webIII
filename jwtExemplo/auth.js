const jsonwebtoken = require('jsonwebtoken')

exports.PRIVATE_KEY = '1010FFF';
exports.user = {
    nome: "Matheus Fernandes",
    email: "matheus.dias25@fatec.sp.gov.br"
}

exports.tokenValited = (request,response, next) =>{
    const [,token] = request.headers.authotization?.split("") || (" ", " ");
    if(!token)
        return response.status(401).send("Acesso negado, nenhum token fornecido");

    try{
        const payload = jsonwebtoken.verify(token, this.PRIVATE_KEY);
        const userIdFormToken = typeof payload != "string" && payload.user;

        if(!this.user && userIdFormToken){
            return response.send(401).json({
                message: "Token invalido"
            })
        }
        request.headers["user"] = payload.user;
        return next();
    }catch(error){
        console.log(error);
        response.status(401).json({message: "token invalido"})
    }
}