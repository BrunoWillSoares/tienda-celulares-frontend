//Install express server
const express = require('express');
const path = require('path');

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/tienda-celulares-frontendapp', options));

app.get('/success',(req, res) => 
    res.sendFile('success.html'),
);

app.get('/*',(req, res) => 
    res.sendFile('index.html'),
);

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);