var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/";
var util = require("util");

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
  });

  it("has an introduction - Find events near you!", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      var bodyObj = JSON.stringify(body);
      expect(bodyObj).to.deep.include("Find events near you!");
      done();
    });
  });

  it("has a form", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      var bodyObj = JSON.stringify(body);
      expect(bodyObj).to.deep.include("<form");
      done();
    });
  });

  it("has a form heading - Please put in your location", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      var bodyObj = JSON.stringify(body);
      expect(bodyObj).to.deep.include("<label>Please put in your location</label>");
      done();
    });
  });

  it("has a form with a place holder - X", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      var bodyObj = JSON.stringify(body);
      expect(bodyObj).to.deep.include("X");
      done();
    });
  });

  it("has a form with a place holder - Y", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      var bodyObj = JSON.stringify(body);
      expect(bodyObj).to.deep.include("Y");
      done();
    });
  });
});
