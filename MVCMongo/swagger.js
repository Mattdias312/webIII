const swaggerAutogen = require('swagger-autogen' )({ openapi: '3.1.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "MVC mongo",
        description: "showing how to use mvc with mongo"
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
};


const outputFile = './swagger-output.json';
const endpointsFiles = ['*./index.js'];

swaggerAutogen(outputFile,endpointsFiles,doc).then(() => {
    require('./')
});
