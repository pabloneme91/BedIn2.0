function viewHospitals (state = {
	hospitals : null,
	isRequesting : false,
	error : false
	}, action) {
	switch(action.type) {
		case 'IS_REQUESTING_TO_SERVER': 
			return Object.assign({}, state, {
				isRequesting: true
			});
		case 'GET_HOSPITALS':
			return Object.assign({}, state, {
				isRequesting: false,
				hospitals: action.hospitals
			});
		case 'FAILED_REQUEST': 
			return Object.assign({}, state, {
				isRequesting: false,
				error: action.err
			})
		default:
			return state;
	}
}

export default viewHospitals;