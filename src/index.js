const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/prueba')
        .then(db => console.log('Conexiòn a la base de datos, lograda'))
        .catch(err => console.error(err));

//Configuraciòn
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/task',require("./routes/tasks"));

//Archivos Static
//console.log(__dirname);
app.use(express.static(__dirname +  "/public"))

//Servidor de escucha
app.listen(app.get('port'), () => {
    console.log("Hello word, Eschuchando desde el puerto", app.get('port'))
});
