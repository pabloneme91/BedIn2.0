export function isRequestingToServer() {
	return {
		type : 'IS_REQUESTING_TO_SERVER'
	}
}

export function getFinanciadores(financiadores) {
	return {
		type : 'GET_FINANCIADORES',
		financiadores
	}
}

export function failedRequest(err) {
	return {
		type : 'FAILED_REQUEST',
		err	
	}
	
}

export function fetchFinancidadores() {
	return (dispatch => {
		dispatch(isRequestingToServer());
		fetch('./bedin/healthcares', {
			method : 'GET',
			credentials : 'include'
		})
		.then(response => response.json())
		.then(financiadores => dispatch(getFinanciadores(financiadores)))
		.catch(err => dispatch(failedRequest(err)));
	})
}