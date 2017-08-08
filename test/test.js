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
      console.log(body);
      done();
    });

    it("should return 200", function(done){
      request.get({ url: baseUrl },
      function(error, response, body) {
        var bodyObj = JSON.parse(body);
        expect(bodyObj.name).to.equal("Luke Skywalker");
        expect(response.statusCode).to.equal(200);
        console.log(h1);
        done();
      });
  });
});
