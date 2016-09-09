module.exports = {
  getFrontPage: function(req, res){

  },
  getSub: function(req, res){

  }
};

//basic error handle function
function handleError(res, reason, message, code){
    console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
}