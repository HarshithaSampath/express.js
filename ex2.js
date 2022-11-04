var express = require('express')
var app = express()
app.get('/', function (req, res) {
   res.send('This is a Sample Example for Express.js .')
})
app.get('/welcome/', function (req, res) {
   res.send('Welcome to cse-c.')
})
 app.get('/hello/', function (req, res) {
   res.send('hello IT.')
})
app.get('/bye/', function (req, res) {
   res.send('bye cse.')
})
app.get('/thank/', function (req, res) {
   res.send('Thank you it.')
})
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})
