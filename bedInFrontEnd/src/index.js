import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

require('bootstrap/dist/css/bootstrap.css');
// require('bootstrap/dist/js/bootstrap.js');
import '../style/style.css';


import LoginContainer from './containers/LoginContainer.jsx';
import BedinHome from './components/bedinViews/BedinHome.jsx';
import FinanciadorHome from './components/bedinViews/FinanciadorHome.jsx';
import FinanciadorForm from './containers/FinanciadorForm.jsx';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer}/>

      <Route path="/Bedin" component={BedinHome}>
        <Route path="financiador" component={FinanciadorHome}></Route>
        <Route path="financiador/entcrear" component={FinanciadorForm}></Route>
        <Route path="financiador/entver"></Route>
        <Route path="financiador/usercrear"></Route>
        <Route path="financiador/userver"></Route>
      </Route>

      <Route path="/Financiador">

      </Route>

      <Route path="/Hospital">

      </Route>

    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
