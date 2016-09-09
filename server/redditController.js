var request = require('request');

module.exports = {
  getFrontPage: function(req, res){

    res.send();
  },
  getSub: function(req, res){
    var sub = req.params.sub;
    var requestObject = {
      url: `http://www.reddit.com/r/${sub}.json`,
      method: 'GET'
    };
    request(requestObject, (err, response, body)=>{
      if(err){
        handleError(response, err.message, 'No such subreddit', 404);
      } 
      else{
        var objOut = {sub};
        var content = JSON.parse(body);
        objOut.list = content.data.children;
        res.send(JSON.stringify(objOut));
      }
    });

  }
};

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}