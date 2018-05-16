const express = require('express');
const app = express.Router();

const healthcareplans = require('../models/healthcareplans');
const errorHandler = require('./errorHandler');

module.exports = {
	
	getHospitalsByPlan : data => healthcareplans.findById(data.healthcareplan)
		.populate('hospitals')
		.exec()
		.then(healthcareplan => healthcareplan.hospitals.map(eachHospital => 
			{ return {hospital: eachHospital._id} }))
		.catch(error => {console.log('error'); errorHandler.sendInternalServerError(res)})
	
	}
	/*getHospitalsByPlan : function(req,res,next){
		healthcareplans.findById(req.body.healthcareplan)
		.populate('hospitals')
		.exec()
		.then(healthcareplan => {
			req.hospitals = healthcareplan.hospitals.map(eachHospital => { return {hospital: eachHospital._id} })
			next();
		})
		.catch(error => {console.log(error); errorHandler.sendInternalServerError(res)});
	}*/
