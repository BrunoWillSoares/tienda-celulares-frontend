//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/tienda-celulares-frontendapp'));

app.use(express.static('./dist/tienda-celulares-frontendapp/success.html'));

//app.use('/success.html', express.static('./dist/tienda-celulares-frontendapp/success.html'));

app.get('/',(req, res) => 
    res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
);

app.get('/Success',(req, res) => 
    res.sendFile('success.html', {root: 'dist/angular-heroku/'}),
);

app.get('/success.html',(req, res) => 
    res.sendFile('./success.html', {root: 'dist/angular-heroku/'}),
);

app.get('/index.html',(req, res) => 
    res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
);


app.get('/Fail',(req, res) => 
    res.sendFile('fail.html', {root: 'dist/angular-heroku/'}),
);

app.get('/Pending',(req, res) => 
    res.sendFile('pending.html', {root: 'dist/angular-heroku/'}),
);


//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);