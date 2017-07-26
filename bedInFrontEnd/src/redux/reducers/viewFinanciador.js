function viewFinanciadores (state = {
	financiadores : null,
	isRequesting : false,

	},action) {
	switch(action.type) {
		case 'IS_REQUSTING_TO_SERVER' : 
			return Object.assign({}, state, {
				isRequesting : true
			});
		case 'GET_FINANCIADORES' :
			return Object.assign({}, state, {
				isRequesting: false,
				financiadores: action.financiadores
			})
		default:
			return state;
	}
}

export default viewFinanciadores;