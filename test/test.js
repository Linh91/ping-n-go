var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/";
var util = require("util");
var module = require("../module");

describe("Home page", function() {
  it("should return 200", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("has app name - Ping! n Go", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      var bodyObj = JSON.stringify(body);
      expect(bodyObj).to.deep.include("Ping! n Go");
      done();
    });

    it("has an introduction - Find events near you!", function(done){
      request.get({ url: baseUrl },
      function(error, response, body) {
        var bodyObj = JSON.stringify(body);
        expect(bodyObj).to.deep.include("Find events near you!");
        done();
      });
  });
});
