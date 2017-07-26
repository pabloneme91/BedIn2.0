const express = require('express');
const router = express.Router();

const user = require ('../models/users');

const authValidator = require ('../controladores/auth');
const errorHandler = require('../controladores/errorHandler');

const userMiddleWare = require ('../controladores/user-middleware'); 

router.get('/:id',authValidator.isLoggedIn, function(req, res, next) {
  user.find(req.params._id)
  .then(users =>{
    res.send(users);  
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);
  })
});


router.post('/test', authValidator.isLoggedIn, 
  userMiddleWare.checkUserType, function(req,res,next) {  
  const userData = {
    name : req.user.name,
    username : req.user.userName,
    type : req.user.type,
    data : req.user.data
  }
  res.send(userData);
});

module.exports = router;