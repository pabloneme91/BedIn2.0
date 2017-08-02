function formReducers(state = {
  isRequesting: false,
  createSucces: false,
  requestFail: false,
  error: null,
  name: null,
  address: null,
  phone: null,
  email: null,
  plans: [],
  receiveHospitals: false,
  hospitals: []
}, action) {
switch(action.type) {
  case 'REQUEST_CREATE':
    return Object.assign({}, state, {isRequesting: true});
  case 'RECEIVE_CREATED':
    return Object.assign({}, state, {
      isRequesting: false,
      createSucces: true,
      name: action.input.name,
      address: action.input.address,
      phone: action.input.phone,
      email: action.input.email,
      plans: action.input.plans
    });
  case 'FAILED_TO_CREATE':
    return Object.assign({}, state, {
      isRequesting: false,
      createSuccess: false,
      error: action.err
    });
  case 'REQUEST_HOSPITAL_LIST':
    return Object.assign({}, state, {isRequesting: true});
  case 'RECEIVE_HOSPITALS':
    return Object.assign({}, state, {
      isRequesting: false,
      receiveHospitals: true,
      hospitals: action.hospitals // receiving a hospitals array from server
  });
  case 'FAILED_REQUEST':
    return Object.assign({}, state, {
      isRequesting: false,
      error: action.err
    });
  default:
    return state;
}
return state;
}

export default formReducers;
