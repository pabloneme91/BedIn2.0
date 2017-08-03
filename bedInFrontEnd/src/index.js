
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

import '../style/style.css';


import LoginContainer from './containers/LoginContainer.jsx';
import BedinHome from './components/bedinViews/BedinHome.jsx';

import BedinFinanciadorHome from './components/bedinViews/FinanciadorHome.jsx';
import BedinFinanciadorForm from './containers/FinanciadorForm.jsx';
import BedinFinanciadorViewData from './containers/FinanciadorViewData.jsx';
import BedinFinanciadorUserViewData from './containers/FinanciadorUserViewData.jsx';

import BedinHospitalHome from './components/bedinViews/HospitalHome.jsx';
import BedinHospitalViewData from './containers/HospitalViewData.jsx';
import BedinHospitalUserViewData from './containers/HospitalUserViewData.jsx';

import AdministradorHome from './components/bedinViews/AdministradorHome.jsx';
import BedinUserViewData from './containers/BedinUserViewData.jsx';

import PerfilContainer from './containers/PerfilContainer.jsx';


//import FinanciadorHomeTestCSS from './containers/financiadorContainers/FinanciadorHomeTestCSS.jsx'
import CreatePatientContainerTestCSS from './containers/financiadorContainers/CreatePatientContainerTestCSS.jsx'
import ViewPatientRequestsTestCSS from './containers/financiadorContainers/ViewPatientRequestsTestCSS.jsx'



const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer}/>

      <Route path="/Bedin" component={BedinHome}>

        <Route path="perfil/:id" component={PerfilContainer}></Route>
        <Route path="financiador">
          <IndexRoute component={BedinFinanciadorHome}/>
          <Route path="entver" component={BedinFinanciadorViewData}/>
          <Route path="entcrear" component={BedinFinanciadorForm}/>
          <Route path="usercrear"/>
          <Route path="userver" component={BedinFinanciadorUserViewData}/>
        </Route>

        <Route path="hospital">
          <IndexRoute component={BedinHospitalHome}/>
          <Route path="entver" component={BedinHospitalViewData}/>
          <Route path="userver" component={BedinHospitalUserViewData}/>
        </Route>
        
        <Route path="administrador" >
          <IndexRoute component={AdministradorHome}/>
          <Route path="userver" component={BedinUserViewData}/>
        </Route>

      </Route>

      <Route path="/Financiador">
        <IndexRoute component={ViewPatientRequestsTestCSS}/>
      </Route> 

      <Route path="/Hospital">

      </Route>

    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
