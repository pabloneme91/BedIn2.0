import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers here 
import authentication from './authentication';
import viewFinanciadores from './viewFinanciador';
import viewUserFinanciador from './viewUserFinanciador';

const rootReducer = combineReducers({
	authentication : authentication,
	viewFinanciadores: viewFinanciadores,
	viewUserFinanciador: viewUserFinanciador,
 	routing: routerReducer
})

export default rootReducer;
