function viewUserFinanciador (state = {
	isRequesting: false,
	usersFinanciador: null,
	error: null
},action) {

	switch(action.type){
		case 'IS_REQUESTING_TO_SERVER': 
			return Object.assign({}, state, {
				isRequesting: true
			}) 
		case 'GET_USER_BY_ID': 
			return Object.assign({}, state, {
				isRequesting: false,
				usersFinanciador: action.user
			})
		case 'GET_USER_BY_TYPE': 
			return Object.assign({}, state, {
				isRequesting: false,
				usersFinanciador: action.users
			})
		case 'FAILED_TO_GET_USER':
			return Object.assign({}, state, {
				isRequesting: false,
				error: action.err
			})
		default:
			return state
	}
}

export default viewUserFinanciador;