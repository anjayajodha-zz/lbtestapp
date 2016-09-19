var express = require('express');
var app = express();
var ip = require('ip');
var os = require('os');

app.set('view engine', 'ejs');

app.get('/', function (request, response){
   response.render('index', {hostname: os.hostname(), ipaddress: ip.address()} );
});

app.listen(8081, function() {
    console.log("Listening on 8081");
})