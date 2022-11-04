var express = require('express')
var app = express()
app.get('/', function (req, res) {
 res.send(' This is a Sample Example for Express.js ')
 })
console.log('Listening on port 8000...');
var server = app.listen(8000)
