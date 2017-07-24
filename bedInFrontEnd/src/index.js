import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

require('bootstrap/dist/css/bootstrap.css');
import '../style/style.css';

import LoginContainer from './containers/LoginContainer.jsx';
import BedinHome from './components/BedinHome.jsx';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer}/>

      <Route path="/Bedin" component={BedinHome}>
      
      </Route>

      <Route path="/Financiador">

      </Route>

      <Route path="/Hospital">

      </Route>

    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
