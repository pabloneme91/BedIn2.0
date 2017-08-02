function viewFinanciadores (state = {
	financiadores : null,
	isRequesting : false,
	error : false
	}, action) {
	switch(action.type) {
		case 'IS_REQUESTING_TO_SERVER': 
			return Object.assign({}, state, {
				isRequesting: true
			});
		case 'GET_FINANCIADORES':
			return Object.assign({}, state, {
				isRequesting: false,
				financiadores: action.financiadores
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

export default viewFinanciadores;