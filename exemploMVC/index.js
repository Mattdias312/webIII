const express = require('express')
const app = express()

const loginRoute = require('./src/routes/loginRoute')
app.use(loginRoute)
const alunosRoute = require('./src/routes/AlunoRoute')
app.use(alunosRoute)
app.set('view engine', 'ejs')
app.set('views','./src/views')

app.listen(3000,function(){
    console.log('App rodando na porta 3000')
})