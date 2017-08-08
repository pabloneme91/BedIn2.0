const express = require('express');
const app = express.Router();

const patientRequest = require('../../models/patientRequest');
const errorHandler = require('../../controladores/errorHandler');

app.get('/', function(req,res) {
	console.log('time')
	setTimeout(function() {console.log('se hizo')}, 5000);
	patientRequest.find(
		{
			hospitalsAndState: {
				$elemMatch: {_id: req.user.hospitalCode}
			},
			'sentTo.hospital': null 
		}
	)
	.then(data => res.send(data))
	.catch(error => {console.log(error); errorHandler.sendInternalServerError(res)});
})

app.put('/', function(req,res) {
	patientRequest.findById(req.body.idPatientRequest)
	.then(patientRequestData => {
		let selectHospital = patientRequestData.hospitalsAndState.find(hospital =>	
			String(hospital._id) === String(req.user.hospitalCode))
		selectHospital.state = req.body.state;
		selectHospital.updatedDate = Date.now();
		selectHospital.idUserHospital = req.user._id; 
		patientRequestData.save()
		.then(saveData => res.send(saveData));
	})
	.catch(error => {console.log(error); errorHandler.sendInternalServerError(res)});
})

module.exports = app;