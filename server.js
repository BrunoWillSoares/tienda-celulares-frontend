//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/tienda-celulares-frontendapp'));
app.use('/Success',express.static('./dist/tienda-celulares-frontendapp/'));
app.use('/Fail',express.static('./dist/tienda-celulares-frontendapp/'));
app.use('/Pending',express.static('./dist/tienda-celulares-frontendapp/'));

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);