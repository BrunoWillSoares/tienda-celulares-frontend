//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use('/app',express.static(express.static(__dirname)));
app.use('/success',express.static(express.static(path.join(__dirname ,'success'))));
//app.use('/success',express.static('./dist/tienda-celulares-frontendapp'));


//Serve only the static files from the dist directory
app.use(express.static('./dist/tienda-celulares-frontendapp'));

/*
app.get('/*', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'public'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
        var fileName = req.params.name;
        console.log('Dir: ' + __dirname);
        console.log('BaseURL: ' + req.baseUrl);
        console.log('OriginalURL: ' + req.originalUrl);
        console.log('Path1: ' + req.path);
        console.log('Path2: ' + path.join(__dirname, '../public'));
        console.log('Entrada: ' + req);
        console.log('Entrada2: ' + req.params);
        console.log('Entrada3: ' + req.params[0]);
        console.log('Arquivo: ' + fileName);
        console.log('Arquivo Com path: ' + path.join(fileName) + ' - ' + path.resolve(fileName));
        res.sendFile(path.join(fileName), options)
    },
);

*/


//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);