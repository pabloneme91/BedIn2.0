const express = require('express');
const router = express.Router();

const user = require ('../../models/users');

router.get('/', function(req, res, next) {
  user.find({})
  .then(users =>{
    res.send(users);  
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);
  })
});

router.get('/:id', function(req, res, next) {
  user.findById(req.params._id)
  .then(_user =>{
    res.send(_user);  
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);
  })
});

router.get('/:type', function(req, res, next) {
  user.find({type : req.params._id })
  .then(users =>{
    res.send(users);  
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);
  })
});

//router.post('/', authValidator.isLoggedIn, function(req, res ,next) {
router.post('/', function(req, res ,next) {
  const newUser = new user ({ 
    username: req.body.username, 
    name:req.body.name,
    type : req.body.type, 
    hospitalCode: req.body.hospitalCode || null,
    osCode: req.body.osCode || null
  });
  user.register(newUser, req.body.password,
    function (err)  {
      if (err) return errorHandler.sendCustomError(res, 'Hubo un error al registrar el ' + 
        'usuario. Verifique que el mismo no se haya agregado previamente.');
      res.send();
    }
  )
});

router.put('/', function(req, res, next) {
  user.findByIdAndUpdate(req.body._id, 
    { $set: 
      { 
        name : req.body.name 
      }
    }, { new: true })
  .then(updateData => {
    res.send(updateData);
  })
  .catch(err => {
    if(err.code === 11000) return errorHandler.sendCustomError(res, 'Ya existe un financiador con ese nombre');
    return errorHandler.sendInternalServerError(res);
  })
});

router.delete('/', function(req,res,next) {
  user.remove({_id : req.body._id})
  .then(() => {
    res.send();
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);  
  })
})

module.exports = router;