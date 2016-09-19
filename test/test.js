var assert = require('assert');
var app = require('../server.js');
var http = require('http');

describe('app', function() {
  after(function() {
      app.close();
  });
});

describe('hostname', function() {
    it('should return 200', function (done) {
        http.get('http://localhost:8081/hostname', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('ip', function() {
    it('should return 200', function (done) {
        http.get('http://localhost:8081/ip', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});

describe('nonexistent', function() {
    it('should return 404', function (done) {
        http.get('http://localhost:8081/nonexistent', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('home', function() {
    it('should return 200', function (done) {
        http.get('http://localhost:8081/', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});