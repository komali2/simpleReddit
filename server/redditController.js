var request = require('request');
var redditArray = require('./config.js').redditArray;

module.exports = {
  getFrontPage: function(req, res){
    var sendArray = [];
    redditArray.forEach((el)=>{
      request(createRequestObject(el, 'GET'), (err, response, body)=>{
        if(err){
          console.log('err in initial request', err);
        }
        var subObject = {};
        subObject.sub = el;
        var content = JSON.parse(body);
        subObject.list = content.data.children.slice(0, 5);
        sendArray.push(subObject);
        if(sendArray.length === redditArray.length){
          res.send(JSON.stringify(sendArray));
        }
        
      });
    });
  },
  getSub: function(req, res){
    var sub = req.params.sub;
    
    request(createRequestObject(sub, 'GET'), (err, response, body)=>{
      if(err){
        handleError(response, err.message, 'No such subreddit', 404);
      } 
      else{
        var subObject = {sub};
        var content = JSON.parse(body);
        subObject.list = content.data.children;
        res.send(JSON.stringify(subObject));
      }
    });

  }
};

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}

function createRequestObject(sub, method){
  return {
    url: `http://www.reddit.com/r/${sub}.json`,
    method: method
  };
}
