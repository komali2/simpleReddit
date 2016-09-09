var request = require('request');

module.exports = {
  getFrontPage: function(req, res){

    res.send();
  },
  getSub: function(req, res){
    var sub = req.params.sub;

    res.send();
  }
};

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}