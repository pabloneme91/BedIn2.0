var express = require('express');
var router = express.Router();
const User = require('../models/users');
const HealthCare = require('../models/healthcares');
const HealthCarePlans = require('../models/healthcareplans');
// const HCP = require('../models/hospitals');

const addUser = (req, res, next) => {
  User.create({
    username: req.body.user.userName,
    name: req.body.user.name,
  }, (err, result) => {
    if (!err) {
      result.password = req.body.user.password
      result.save( (err, result) => {
        req.user=result;
        next();
      });
    }else{
      res.send({error:true, msj:'Fallo el alta de usuario: '+err});
    }
  })
};

const validNewUser = (req, res, next) => {
  if (req.body.user.password !== req.body.user.password2) {
    res.send({error:true, msj:'Las password no coinciden'});
  } else {
    User.findOne({ username: req.body.user.userName }, (err, result) => {
      if (err || !result) {      
        next();
      } else {
        res.send({error:true,msj:'Usuario ya registrado'});
      }
    });
  }
};

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

module.exports = router;
