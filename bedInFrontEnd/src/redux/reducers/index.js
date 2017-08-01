import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers here 
import authentication from './authentication';

import viewFinanciadores from './viewFinanciador';
import viewUser from './viewUser';

import viewHospitals from './viewHospital';

const rootReducer = combineReducers({
	authentication : authentication,
	viewFinanciadores: viewFinanciadores,
	viewUser: viewUser,
	viewHospitals: viewHospitals,
 	routing: routerReducer
})

export default rootReducer;
