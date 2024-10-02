const jsonWebToken = require('jsonwebtoken');
const {PRIVATE_KEY, user} = require('../../auth')

exports.public = (_,resp)=>
    resp.status(200).json({
        message: "testando rota publica"
    });

exports.login = (req,resp)=> {
    const [,hash] = req.headers.autorization?.split("") || (" ", " ")
    const email = req.body.email;
    const password = req.body.password;

    try{
        const correctPassword = email==="matheus.dias25@fatec.sp.gov.br"
        && password === 12345;

        if(!correctPassword) {
            return resp.status(401).send("Senha ou email invalido");
        }

        const token = jsonWebToken.sign(
            {user:JSON.stringify(user)},
            PRIVATE_KEY,
            {
                expiresIn: "60m"
            }
        );
        return resp.status(200).json({data:{user, token}});
        
    }catch (error){
        console.log(error);
        return resp.send(error);
    }
}

exports.private = (req, resp) => {
    const {user} = req.headers;
    const currentUser = JSON.parse(user);
    return resp.status(200).json({
        message: "rota privada",
        data:{
            userLogged: currentUser
        }
    })
}