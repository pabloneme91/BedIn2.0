const express = require('express');
const app = express.Router();
const moment = require('moment');

const patientRequest = require('../models/patientRequest');
const errorHandler = require('./errorHandler');

module.exports = {
	
	setPatientTimeOut: function() {
		const endTime = 1;
		setInterval(() => {
			patientRequest.find({
			'sentTo.hospital' : null,
			timeout: false
			})
			.then(patientRequestArray => {
				let timeDifference;
				patientRequestArray.map(patient => {
					timeDifference = parseInt(moment().diff(patient.dateCreated, 'minutes'));
					if(timeDifference >= endTime) {
						patient.timeout = true;	
						patient.save();
					}  
				})
			})
			.catch(err => console.log(err))	
		}, 10000)
	}

}