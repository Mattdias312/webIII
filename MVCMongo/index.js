const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./src/routes/userRoute');
const projectRoute = require('./src/routes/projectRoute');
const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/Fatec';
let mongodb = process.env.MONGODB_URI || url;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console, 'error ao conectar com a base de dados'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendde: false}));
app.use(userRoute);
app.use(projectRoute);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});

