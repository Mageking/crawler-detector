'use strict';

var expect = require('chai').expect;
var crawlerUserAgents = require('../index');

describe('#crawlerDetector', function() {
  it('should return true for if known crawler', function() {
    var result = crawlerUserAgents.isCrawler('Twitterbot/1.0');
    expect(result).to.equal(true);
  });

  it('should return false for if not known crawler', function() {
    var result = crawlerUserAgents.isCrawler('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/603.2.5 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.5');
    expect(result).to.equal(false);
  });

  it('should return false if userAgentString is not supplied' , function(){
    var result = crawlerUserAgents.isCrawler();
    expect(result).to.equal(false);
  })

  it('should return false if userAgentString is not a string ' , function(){
    var result = crawlerUserAgents.isCrawler(123);
    expect(result).to.equal(false);
  })
});