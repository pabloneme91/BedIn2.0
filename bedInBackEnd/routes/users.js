const express = require('express');
const router = express.Router();
const passport = require('passport')
const Hospital= require('../models/hospitals');

const user = require ('../models/users');
const hospital = require('../models/hospitals');
const authValidator = require ('../controladores/auth');
const userMiddleWare = require ('../controladores/user-middleware'); 
const errorHandler = require('../controladores/errorHandler') 

router.post('/login', passport.authenticate('local'), userMiddleWare.checkUserType,function(req,res,next) {  
  const userData = {
    name : req.user.name,
    username : req.user.username,
    type : req.user.type,
    data : req.user.data
  }
  res.send(userData);
});


router.get('/logout',  function(req, res, next) {
  req.logout();
  res.send();
});

router.post('/register', authValidator.isLoggedIn, function(req, res ,next) {
  user.register(new user({ 
    username: req.body.username, 
    name:req.body.name,
    type : req.body.type, 
    hospitalCode: req.body.hospitalCode || null,
    osCode: req.body.osCode || null
    }), 
    req.body.password, 
    function (err)  {
      if (err) return errorHandler.sendError(res, err.name);
      res.send();
    }
  )
});

module.exports = router;