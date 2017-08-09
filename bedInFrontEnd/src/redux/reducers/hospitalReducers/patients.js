function patients(state = {
		isRequesting: false,
		error: null
		patientsData: null,
	}, action) {
	switch(action.type) {
		case 'IS_REQUESTING_TO_SERVER': 
			return Object.assign({}, state, {
				isRequesting: true
			})
		case 'GET_PATIENTS': 
			return Object.assign({}, state, {
				isRequesting: false,
				patients: action.patients
			})
		case 'FAILED_TO_GET_PATIENTS':
			return Object.assign({}, state, {
				isRequesting: false,
				error: action.err
			})
	}
}