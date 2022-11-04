var express = require('express')
var app = express()
 // route that gets executed for GET request and the request url path '/' or root
app.get('/', function (req, res) {
   res.send('This is a Sample Example for Express.js .')
})
// route that gets executed for GET request and the request url path '/hello/'
app.get('/welcome/', function (req, res) {
   res.send('Welcome to cse-c.')
})
 // route that gets executed for GET request and the request url path '/bye/'
app.get('/hello/', function (req, res) {
   res.send('hello IT.')
})
 // route that gets executed for GET request and the request url path '/bye/'
app.get('/bye/', function (req, res) {
   res.send('bye cse.')
})
// route that gets executed for GET request and the request url path '/bye/'
app.get('/thank/', function (req, res) {
   res.send('Thank you it.')
})
// start the server
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})
