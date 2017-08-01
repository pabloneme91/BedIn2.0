export function requestCreate() {
  return {
    type: 'REQUEST_CREATE',
  };
}

export function requestHospitalList() {
  return {
    type: 'REQUEST_HOSPITAL_LIST',
  };
}

export function receiveCreated(input) {
  return {
    type: 'RECEIVE_CREATED',
    input
  };
}

export function receiveHospitals(hospitals) {
  return {
    type: 'RECEIVE_HOSPITALS',
    hospitals
  };
}

export function failedToCreate(err) {
  return {
    type: 'FAILED_TO_CREATE',
    err
  }
}

export function failedRequest(err) {
  return {
    type: 'FAILED_REQUEST',
    err
  };
}


export function createEntidadFinanciadora(inputData) {

  return (dispatch) => {
    dispatch(requestCreate());

    return fetch('./bedin/healthcares', {
      method: 'POST',
      credentials: 'include',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify(inputData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA', data)
        if(data) {
          dispatch(receiveCreated(data))
        } else {
          dispatch(failedToCreate(data.err))
        }
      })
      .catch(err => dispatch(failedRequest(err)))
  };
};


export function fetchHospitalList() {
  return (dispatch) => {
    dispatch(requestHospitalList());

    return fetch('./bedin/hospitals', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => dispatch(receiveHospitals(data)))
      .catch(err => dispatch(failedRequest(err)))
  };
};


export function createUserFinanciador(inputData) {

  return (dispatch) => {
    dispatch(requestCreate());

    return fetch('./bedin/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify(inputData)
    })
      .then(response => response.json())
      .then(data => {
        if(data.register) {
          dispatch(receiveCreated())
        } else {
          dispatch(failedToCreate(data.err))
        }
      })
      .catch(err => dispatch(failedRequest(err)))
  };
};
