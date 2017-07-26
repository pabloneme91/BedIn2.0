const express = require('express');
const router = express.Router();

const HCP= require('../../models/healthcareplans');

const Hospitals = require('../../models/hospitals');
const HealthCare = require('../../models/healthcares');
const HealthCarePlans = require('../../models/healthcareplans');
const errorHandler = require('../../controladores/errorHandler');


router.get('/', function(req, res, next) {
  HealthCare.find({})
  .populate({
    path : 'plans',
    populate : {
      path : 'hospitals',
      model : Hospitals
    }
  })
  .exec()
  .then(healthcares =>{
    res.send(healthcares) 
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);
  })
});

router.get('/:id', function(req, res, next) {
  HealthCare.findById(req.params.id)
  .populate({
    path : 'plans',
    populate : {
      path : 'hospitals',
      model : Hospitals
    }
  })
  .exec()
  .then(healthcares =>{
    res.send(healthcares) 
  })
  .catch(err => {
    return errorHandler.sendInternalServerError(res);
  })
});

router.post('/', function(req, res, next) {
  const aNewHealthcare = req.body.name;
  const arrayPlans = req.body.plans;
  let healthCare;
  let plans;
  HealthCare.create({name: aNewHealthcare, email: Math.random()})
  .then(newHealthCare => {
    healthCare = newHealthCare;
    return Promise.all(arrayPlans.map(eachPlan =>
      HealthCarePlans.create({name: eachPlan.name, hospitals : eachPlan.hospitals})
    ))
  })
  .then(newPlans => {
    healthCare.plans = newPlans;
    healthCare.save().then(data => res.send(data));
  })
  .catch(err => {
    if(err.code === 11000) return errorHandler.sendCustomError(res, 'Ya existe un financiador con ese nombre');
    return errorHandler.sendInternalServerError(res);
  })
});

router.post('/newPlan', function(req, res, next) {
   	let aNewPlan=req.body.plan;
    HCP.create(aNewPlan,function(err,result){
      if(err) console.log(err);
    });

  res.send({ok:"OK!"});  
});


router.post('/newHealthCare', function(req, res, next) {
    let aHC=req.body.healthCare;
    HC.create(aHC,function(err,result){
      if(err) console.log(err);
    });

  res.send({ok:"OK!"});  
});

router.get('/healthCare', function(req, res, next) {
  HC.find({}).exec((err, result)=>{
    // console.log("Result ", result)
    // console.log("Error ",err)    
  res.send(result);  
  })
});

router.get('/healthCarePlans', function(req, res, next) {
  HCP.find({}).exec((err, result)=>{

    // console.log("Result ", result)
    // console.log("Error ",err)

    res.send(result);  
  })
})

module.exports = router;