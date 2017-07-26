export function isRequesting() {
	type : 'IS_REQUESTING_TO_SERVER'
}

export function getFinanciadores(financiadores) {
	type : 'GET_FINANCIADORES',
	financiadores
}

export function failedRequest(err) {
	type : 'FAILED_REQUEST',
	err
}

export function fetchFinancidadores() {
	return (dispatch => {
		dispatch(isRequesting());
		fetch('./bedin/healthcares', {
			method : 'GET',
			credentials : 'include'
		})
		.then(response => response.json())
		.then(financiadores => dispatch(getFinanciadores(financiadores)))
		.catch(err => dispatch(failedRequest(err)));
	})
}