'use strict';

var crawlerUserAgents = require('./crawler-user-agents.json');
var _ = require('lodash');

module.exports = {

  /**
   * Checks if string belongs to known crawler
   * @param {string} userAgentString
   * @return {boolean}
   */
  isCrawler: function(userAgentString){
    if(!userAgentString || !_.isString(userAgentString)){
      return false;
    }

    var isCrawler = false;

    _.each(crawlerUserAgents , function(crawlerObj){
      if(userAgentString.indexOf(crawlerObj.pattern) !== -1){
        isCrawler = true;
        return false;
      }
    });

    return isCrawler;
  }
};