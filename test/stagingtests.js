var assert = require('assert');
var app = require('../server.js');
var http = require('http');
var ipaddr = require('../ipaddress.json')

describe('app', function() {
});

describe('hostname', function() {
    it('host 1 hostname should return 200', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + ':8081/hostname', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('ip', function() {
    it('host 1 ip should return 200', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + ':8081/ip', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('nonexistent', function() {
    it('host 1 nonexistent should return 404', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + ':8081/nonexistent', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('home', function() {
    it('host 1 home should return 200', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + ':8081/', function (res) {
            console.log('Endpoint is: ' + ipaddr[0].ipAddress + ':8081/');
            assert.equal(200, res.statusCode);
            done();
        });
    }); 
});
