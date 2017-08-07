export function isRequestingToServer () {
	return {
		type: "IS_REQUESTING_TO_SERVER"
	}
}

export function getPatients (patients) {
	return {
		type: "GET_PATIENTS",
		patients
	}
}

export function setViewedPatient () {
	return {
		type: "SET_VIEW_PATIENT"
	}
} 

export function setAcceptedPatient () {
	return {
		type: "SET_ACCEPTED_PATIENT"
	}
}

export function failedToGetPatients (err) {
	return {
		type: "FAILED_TO_GET_PATIENTS",
		err
	}
}

export function fetchGetPatients () {
	return (dispatch => {
		dispatch(isRequestingToServer());
		return fetch('urlGetPatient', {
			method: 'GET',
			credentials: 'include'
		})
		.then(response => response.json())
		.then(patients => dispatch(getPatients(patients)))
		.catch(err => dispatch(failedToGetPatients(err)))
	})
} 

export function fecthSetViewedPatient (idPatient) {
	return (dispatch => {
		dispatch(isRequestingToServer());
		return fetch('urlSetViewedPatient', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify(idPatient)
		})
		.then(response => response.json())
		.then(data => {
			if data.error
		})
	})
}