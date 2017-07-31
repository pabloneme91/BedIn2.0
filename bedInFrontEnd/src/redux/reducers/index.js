import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers here 
import authentication from './authentication';
import viewFinanciadores from './viewFinanciador';


const rootReducer = combineReducers({authentication : authentication,
	viewFinanciadores: viewFinanciadores,
 	routing: routerReducer})

export default rootReducer;
