var assert = require('assert');
var app = require('../server.js');
var http = require('http');
var ipaddr = require('../ipaddress.json')

describe('app', function() {
});

describe('hostname', function() {
    it('load balanced site should return 200', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + '/hostname', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('ip', function() {
    it('load balanced site ip should return 200', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + '/ip', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('nonexistent', function() {
    it('load balanced site nonexistent should return 404', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + '/nonexistent', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('home', function() {
    it('load balanced site home should return 200', function (done) {
        http.get('http://' + ipaddr[0].ipAddress + '/', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});