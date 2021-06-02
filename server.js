const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('<h1>Proyecto microprocesadores con HTML!</h1>'))

app.listen(8000); 
console.log('Server on Port 8000')