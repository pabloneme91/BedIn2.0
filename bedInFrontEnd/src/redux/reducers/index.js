import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';
import formReducers from './formReducers';
import viewFinanciadores from './viewFinanciador';
import viewUser from './viewUser';
import viewHospitals from './viewHospital';
import patientRequestReducers from './patientRequestReducers';


const rootReducer = combineReducers({
	authentication : authentication,
	formReducers: formReducers,
	viewFinanciadores: viewFinanciadores,
	viewUser: viewUser,
	viewHospitals: viewHospitals,
	patientRequestReducers: patientRequestReducers,
 	routing: routerReducer
})


export default rootReducer;
