const loginModel = require('../model/loginModel')
const login = new loginModel()
const logged = login.isLogged()

exports.getLogin = ((req, resp)=>{
    resp.send(`<h1>${logged}</h1>`)
})

exports.getIslogged = ((req, resp)=>{
    resp.render("loginView", {logged : logged})
})