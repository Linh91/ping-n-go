var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:3000/";
var util = require("util");

describe("Home page", function() {
  it("should return html", function(done){
    request.get({ url: baseUrl },
    function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});
