import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './authentication';
import formReducers from './formReducers';
import viewFinanciadores from './viewFinanciador';
import viewUser from './viewUser';

import viewHospitals from './viewHospital';

const rootReducer = combineReducers({
	authentication : authentication,
	formReducers: formReducers,
	viewFinanciadores: viewFinanciadores,
	viewUser: viewUser,
	viewHospitals: viewHospitals,
 	routing: routerReducer
})


export default rootReducer;
