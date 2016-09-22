var assert = require('assert');
var app = require('../server.js');
var http = require('http');
var ipaddr = require('../ipaddress.json')

describe('app', function() {
});

describe('hostname', function() {
    it('should return 200', function (done) {
        http.get('http://' + ipaddr.ipAddress + '/hostname', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('ip', function() {
    it('should return 200', function (done) {
        http.get('http://' + ipaddr.ipAddress + '/hostname', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('nonexistent', function() {
    it('should return 404', function (done) {
        http.get('http://' + ipaddr.ipAddress + '/hostname', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('home', function() {
    it('should return 200', function (done) {
        http.get('http://' + ipaddr.ipAddress + '/hostname', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});