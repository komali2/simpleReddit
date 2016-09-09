module.exports = {
  getFrontPage: function(req, res){

    res.send();
  },
  getSub: function(req, res){
    res.send();
  }
};

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}