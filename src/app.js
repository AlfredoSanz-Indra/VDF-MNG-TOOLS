/*
* @script: app.js -> Principal script de la aplicacion, 
*                    lanza el servidor y configuracion de
*                    la App.
*
* @author: Alfredo Sanz
* @date: Nov 2019
*/

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();


/*
* Importing Routes
*/
const indexRoutes = require('./routes/Routes');

/*
* Settings
*/
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

/*
* Middleware -> funcion que se ejecuta antes de llegar a las rutas
*/
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*
* Routes
*/
app.use('/VFMNGTOOLS', indexRoutes);


/*
* ¡¡¡¡Iniciando servidor!!!!
*/
app.listen(app.get('port'), () => {
    console.log(`Server alive on port: ${app.get('port')}`);
});