// imports 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
// instancia express 
const app = express(); 

// cors para permitir comunicacion local
app.use( cors() );

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false})); 

// parse application/json
app.use(bodyParser.json());


// conexion a la base de datos
const urlDB = 'mongodb://localhost:27017/toDoList';  

mongoose.connect(urlDB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if(err) throw err; 
    console.log('Base de datos online');
});


// configuracion de rutas 
app.use(require('./routes/task.routes'));

// levantar servidor 
app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
})

module.exports = [app];