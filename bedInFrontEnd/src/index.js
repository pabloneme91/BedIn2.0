import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

import 'bootstrap/dist/css/bootstrap.css';
import '../../style/style.css';

import App from './components/App';
import LogInOut from './containers/LogInOutContainer.jsx';
import BedinHome from './components/BedinHome.jsx';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LogInOut}></IndexRoute>
        <Route path="/home" component={BedinHome}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
