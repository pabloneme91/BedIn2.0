import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers here
import authentication from './authentication';
import formReducers from './formReducers';


const rootReducer = combineReducers({authentication: authentication, formReducers: formReducers, routing: routerReducer})

export default rootReducer;
