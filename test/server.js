var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe("Test Site", function() {
    var url = "http://usattmatchheadtohead.firebaseapp.com";

    it('should return status 200', function(done) {
      chai.request(url)
        .get('/')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });

    it('should take less than 5s', function(done) {
      this.timeout(5000);
      chai.request(url)
        .get('/')
        .end(function(err, res){
          done();
        });
    });
});

var properties = [
    'LastName',
    'FirstName',
    'USATT #',
    'Date',
    'Tournament Name',
    'Tournament ID',
    'Event',
    'Opponent Last Name',
    'Opponent First Name',
    'Opponent USATT #',
    'Outcome',
    'Match Score',
    'Pre-Tournament Rating Delta',
    'Pass 1 Rating +/-',
    'Pass1 Post-Tournament Rating',
    'Pass 2 Rating +/-',
    'Pass 2 Adjusted Rating',
    'Pass 2 Post-Tournament Rating',
    'Final Rating +/-'
]

describe("Testing 2015 Data", function() {
    this.timeout(20000);
    var url2015 = "https://tim-pingpong-stats.herokuapp.com/2015";

    it('should return correct data', function(done) {
      chai.request(url2015)
        .get('/')
        .end(function(err, res){
          res.should.be.json;
          res.body[1]["LastName"].should.equal('Aole');
          res.body.should.be.a('array');
          for(var i =0; i<19; i++) {
              res.body[0].should.have.property(properties[i]);
          }
          res.body.should.be.of.length(65500);
          done();
        });
    });

});

describe("Testing 2014 Data", function() {
    this.timeout(20000);
    var url2014 = "https://tim-pingpong-stats.herokuapp.com/2014";

    it('should return correct data', function(done) {
      chai.request(url2014)
        .get('/')
        .end(function(err, res){
          res.should.be.json;
          res.body[1]["LastName"].should.equal('Burnside');
          res.body.should.be.a('array');
          for(var i =0; i<19; i++) {
              res.body[0].should.have.property(properties[i]);
          }
          res.body.should.be.of.length(65500);
          done();
        });
    });

});

describe("Testing 2013 Data", function() {
    this.timeout(20000);
    var url2013 = "https://tim-pingpong-stats.herokuapp.com/2013";

    it('should return correct data', function(done) {
      chai.request(url2013)
        .get('/')
        .end(function(err, res){
          res.should.be.json;
          res.body[1]["LastName"].should.equal('Abdulrasool');
          res.body.should.be.a('array');
          for(var i =0; i<19; i++) {
              res.body[0].should.have.property(properties[i]);
          }
          res.body.should.be.of.length(65500);
          done();
        });
    });

});

describe("Testing 2012 Data", function() {
    this.timeout(20000);
    var url2012 = "https://tim-pingpong-stats.herokuapp.com/2012";

    it('should return correct data', function(done) {
      chai.request(url2012)
        .get('/')
        .end(function(err, res){
          res.should.be.json;
          res.body[1]["LastName"].should.equal('Aiyer');
          res.body.should.be.a('array');
          for(var i =0; i<19; i++) {
              res.body[0].should.have.property(properties[i]);
          }
          res.body.should.be.of.length(65500);
          done();
        });
    });

});
