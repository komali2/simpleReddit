var redditController = require('./redditController');

module.exports = function (app, express){
  app.get('/reddit', redditController.getFrontPage);
  app.get('/reddit:sub', redditController.getSub);


};

