const tempreturaModel = require('../model/TemperaturaModel')
const temp = new tempreturaModel()

exports.getLogin = ((req, resp)=>{
    resp.send(`<h1>${logged}</h1>`)
})

exports.getIslogged = ((req, resp)=>{
    resp.render("temperaturaFormView", {logged : logged})
})