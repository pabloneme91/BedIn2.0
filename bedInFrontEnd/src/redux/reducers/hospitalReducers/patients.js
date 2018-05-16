function patients(state = {
		isRequesting: false,
		error: null,
		patientsData: [],
		acceptedPatientsData: null
	}, action) {
	switch(action.type) {
		case 'IS_REQUESTING_TO_SERVER': 
			return Object.assign({}, state, {
				isRequesting: true
			})
		case 'GET_PATIENTS': 
			return Object.assign({}, state, {
				isRequesting: false,
				patientsData: action.patients
			})
		case 'GET_ACCEPTED_PATIENTS': 
			return Object.assign({}, state, {
				isRequesting: false,
				acceptedPatientsData: action.acceptedPatients
			})
		case 'FAILED_TO_GET_PATIENTS':
			return Object.assign({}, state, {
				isRequesting: false,
				error: action.err
			})
		case 'ADD_PATIENT_REQUEST':

			return Object.assign({}, state, {
				patientsData: state.patientsData.concat(action.patient) 
			})
		default: 
			return state
	}
}

export default patients;