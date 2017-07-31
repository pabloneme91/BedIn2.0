function viewFinanciadores (state = {
	financiadores : null,
	isRequesting : false,
	error : false
	}, action) {
	switch(action.type) {
		case 'IS_REQUESTING_TO_SERVER' : 
			return Object.assign({}, state, {
				isRequesting : true
			});
		case 'GET_FINANCIADORES' :
		console.log('action', action.financiadores)
			return Object.assign({}, state, {
				isRequesting: false,
				financiadores: action.financiadores
			});
		case 'FAILED_REQUEST' : 
			return Object.assign({}, state, {
				isRequesting : false,
				error : true
			})
		default:
			return state;
	}
}

export default viewFinanciadores;