const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));

const loginRoute = require('./src/routes/loginRoute')
app.use(loginRoute)
const alunosRoute = require('./src/routes/AlunoRoute')
app.use(alunosRoute)
const temperaturaRoute = require('./src/routes/temperaturaRoute')
app.use(temperaturaRoute)
app.set('view engine', 'ejs')
app.set('views','./src/views')

app.listen(3000,function(){
    console.log('App rodando na porta 3000')
})