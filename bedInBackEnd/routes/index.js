var express = require('express');
var router = express.Router();

const userMiddleWare = require ('../controladores/user-middleware'); 

router.get('/', function (req, res) {
  res.sendFile('../bedInFrontEnd/index.html');
});

router.post('/login', userMiddleWare.authenticateUser,
  userMiddleWare.checkUserType, function(req,res,next) {  
  const userData = {
    name : req.user.name,
    username : req.user.userName,
    type : req.user.type,
    data : req.user.data
  }
  res.send(userData);
});

router.get('/logout',  function(req, res, next) {
  req.logout();
  res.send();
});

module.exports = router;
