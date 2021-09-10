//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/tienda-celulares-frontendapp'));

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
        console.log('Entrada: ' + req);
        console.log('Entrada2: ' + req.params);
        console.log('Arquivo: ' + fileName);
        console.log('Arquivo Com path: ' + path.join(fileName) + ' - ' + path.resolve(fileName));
        res.sendFile(path.join(fileName), options)
    },
);




//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);