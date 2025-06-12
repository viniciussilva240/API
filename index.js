const express = require ('express');
const { text } = require('stream/consumers');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');

});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
})