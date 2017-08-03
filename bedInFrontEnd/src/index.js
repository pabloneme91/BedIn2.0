import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

import '../style/style.css';


import LoginContainer from './containers/LoginContainer.jsx';
import BedinHome from './components/bedinViews/BedinHome.jsx';

import FinanciadorHome from './components/bedinViews/FinanciadorHome.jsx';
import FinanciadorForm from './containers/FinanciadorForm.jsx';
import FinanciadorViewData from './containers/FinanciadorViewData.jsx';
import FinanciadorUserForm from './containers/FinanciadorUserForm.jsx';
import FinanciadorUserViewData from './containers/FinanciadorUserViewData.jsx';

import HospitalHome from './components/bedinViews/HospitalHome.jsx';
import HospitalForm from './containers/HospitalForm.jsx';
import HospitalViewData from './containers/HospitalViewData.jsx';
import HospitalUserViewData from './containers/HospitalUserViewData.jsx';

import AdministradorHome from './components/bedinViews/AdministradorHome.jsx';
import BedinUserViewData from './containers/BedinUserViewData.jsx';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer}/>

      <Route path="/Bedin" component={BedinHome}>

        <Route path="financiador" component={FinanciadorHome}></Route>
        <Route path="financiador/entcrear" component={FinanciadorForm}></Route>
        <Route path="financiador/entver" component={FinanciadorViewData}></Route>
        <Route path="financiador/usercrear" component={FinanciadorUserForm}></Route>
        <Route path="financiador/userver" component ={FinanciadorUserViewData}></Route>

        <Route path="hospital" component={HospitalHome}></Route>
        <Route path="hospital/entcrear" component={HospitalForm}></Route>
        <Route path="hospital/entver" component={HospitalViewData}></Route>
        <Route path="hospital/userver" component={HospitalUserViewData}></Route>

        <Route path="administrador" component={AdministradorHome}></Route>
        <Route path="administrador/userver" component={BedinUserViewData}></Route>

      </Route>

      <Route path="/Financiador">

      </Route>

      <Route path="/Hospital">

      </Route>

    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
