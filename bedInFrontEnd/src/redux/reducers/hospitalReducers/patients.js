function patients(state = {
		isRequesting: false,
		error: null,
		patientsData: null,
	}, action) {
	switch(action.type) {
		case 'IS_REQUESTING_TO_SERVER': 
			return Object.assign({}, state, {
				isRequesting: true
			})
		case 'GET_PATIENTS': 
		console.log('action.patients', action.patients)
			return Object.assign({}, state, {
				isRequesting: false,
				patientsData: action.patients
			})
		case 'FAILED_TO_GET_PATIENTS':
			return Object.assign({}, state, {
				isRequesting: false,
				error: action.err
			})
		default: 
			return state
	}
}

export default patients;