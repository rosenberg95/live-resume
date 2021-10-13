// Install express server
const express = require('express');
const path = require('path');
const app = express();
var PORT = 8080                         // default Heroku port

// Serve only the static files form the dist directory
app.use(express.static('./dist'));
app.use(express.static(__dirname + '/dist/en'));
// app.use(express.static(__dirname + '/dist/da'));


app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/en/'}),
);
    
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || PORT);