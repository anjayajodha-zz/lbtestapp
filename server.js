var express = require('express');
var app = express();
var ip = require('ip');
var os = require('os');

app.set('view engine', 'ejs');

app.get('/', function (request, response){
   response.render('index', {hostname: os.hostname(), ipaddress: ip.address()} );
});

app.get('/hostname', function(request, response){
    response.send(os.hostname());
});

app.get('/ip', function(request, response){
    response.send(ip.address());
});

app.listen(80, function() {
    console.log("Listening on 80");
})