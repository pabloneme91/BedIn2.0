import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers here 
import authentication from './authentication';


const rootReducer = combineReducers({authentication : authentication, routing: routerReducer})

export default rootReducer;
