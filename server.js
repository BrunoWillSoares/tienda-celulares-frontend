//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/tienda-celulares-frontendapp'));

app.get('/*', function (req, res) { 
        var fileName = req.params.name;
        res.sendFile(fileName, {root: 'dist/angular-heroku/'})
    },
);




//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);