const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('<h1>Proyecto microprocesadores CESAR BNDIA!</h1>'))

app.listen(8080); 
console.log('Server on Port 8080')