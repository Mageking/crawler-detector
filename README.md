
This module helps detect if a user agent derives from known robots/crawlers/spiders.

The module is dependent on the crawler list provided in [https://github.com/monperrus/crawler-user-agents](https://github.com/monperrus/crawler-user-agents)

Example:

    var express = require('express')
    var app = express()
    var crawlerDetector = require('crawler-detector');

    app.get('/', function (req, res) {
      if(crawlerDetector.isCrawler(req.headers['user-agent'])){
        res.send('this is a crawler');
        return;
      }
      res.send('this is not a crawler');
    })

The module is under a [MIT License](https://opensource.org/licenses/MIT).

--Que

