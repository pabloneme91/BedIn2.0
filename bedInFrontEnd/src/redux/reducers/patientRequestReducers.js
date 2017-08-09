function patientRequestReducers(state = {
  isRequesting: false,
  createSuccess: false,
  dni: null,
  age: null,
  sex: null,
  cie10: null,
  complexity: null,
  patientPlan: null,
  dateCreated: null,
  hospitalsRequested: [],
  error: null,
  receivePlans: false,
  plans: [],
  requestFail: false,
}, action) {
switch(action.type) {
  case 'REQUEST_CREATE':
    return Object.assign({}, state, {isRequesting: true});
  case 'RECEIVE_CREATED_PATIENT':
    return Object.assign({}, state, {
      isRequesting: false,
      createSuccess: true,
      dni: action.input.dni,
      age: action.input.age,
      sex: action.input.sex,
      cie10: action.input.cie10,
      complexity: action.input.complexity,
      patientPlan: action.input.plan,
      dateCreated: action.input.dateCreated,
      hospitalsRequested: action.input.hospitalsAndState
    });
  case 'FAILED_TO_CREATE':
    return Object.assign({}, state, {
      isRequesting: false,
      createSuccess: false,
      error: action.err
    });
  case 'REQUEST_LIST':
    return Object.assign({}, state, {isRequesting: true});
  case 'RECEIVE_PLANS':
    return Object.assign({}, state, {
      isRequesting: false,
      receivePlans: true,
      plans: action.plans // receiving an array of plans belonging to the financiador signed in
    });
  case 'FAILED_REQUEST':
    return Object.assign({}, state, {
      isRequesting: false,
      error: action.err
    });
  case 'RESET_CREATE_SUCCESS':
    return Object.assign({}, state, {createSuccess: false});
  default:
    return state;
}
return state;
}

export default patientRequestReducers;
