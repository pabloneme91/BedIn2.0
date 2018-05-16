const patientRequestModel = require('../models/patientRequest');
const hospitalsController = require('../controladores/hospitals');

module.exports = socket => {
	_socket = socket;
	return {
		
		newRequest: () =>  {
			socket.on('newRequest', (newRequest,fn) => {
				hospitalsController.getHospitalsByPlan(newRequest)
				.then(hospitals => {
					newRequest.hospitalsAndState = hospitals;
					newRequest.healthcare = socket.request.user.osCode;
					patientRequestModel.create(newRequest)
					.then(newPatient => {
						patientRequestModel.findById(newPatient._id)
						.populate('healthcareplan', 'name')
						.populate('healthcare', 'name')
						.exec()
						.then(populatedNewPatient => {
							_socket.emit('newPatient',populatedNewPatient); //Send to the other component (hospital).
							fn('ok'); //Success from emit request (Healthcare).
						})
					})
					.catch(err => console.log(err));
				})
			})
		},

		setPatientState: () => { 
			socket.on('setPatientState', (patient, fn) => {
				patientRequestModel.findById(patient.idPatient)
				.then(patientRequestData => {
					let selectHospital = patientRequestData.hospitalsAndState.find(eachHospital =>	
						String(eachHospital.hospital) === String(socket.request.user.hospitalCode))
					selectHospital.state = patient.state;
					selectHospital.updatedDate = Date.now();
					selectHospital.userHospital = socket.request.user._id;
					patientRequestData.save()
					.then(saveData => {
						fn('ok');
						_socket.emit('patientStateUpdated',{});
					})	
				})
				.catch(error => {console.log(error); errorHandler.sendInternalServerError(error)});
			})
		},

		matchPatient: () => {
			socket.on('matchPatient', (patient, fn) => {
				patientRequestModel.findByIdAndUpdate(patient.idPatientRequest, {
					$set: {
						'sentTo.hospital': patient.idHospital,
						'sentTo.userFinanciador': socket.request.user._id,
						'sentTo.matchedDate': Date.now()
					}
				}, {new: true})
				.then(updatedPatient => {
					_socket.emit('newMatchPatient', {});
					fn('ok');
				})
				.catch(error => {console.log(error); errorHandler.sendInternalServerError(error)});
			})
		}

	}
}


