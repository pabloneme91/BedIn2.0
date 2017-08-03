
import React from 'react';

import LargeButton from '../LargeButton.jsx';

import { Link } from 'react-router';

function FinanciadorHome(props) {
  return (
    <div>
          <div className="container-fluid b4">
            <div className="row">
              <div className="col-xs-hidden col-sm-2 col-lg-2 col-xl-5"></div>
              <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">
                <h2 className="e4">Obra Social</h2>
                <Link className="btn icon-btn btn-info" id="c4" to="/Bedin/financiador/entcrear">
                <span className="glyphicon a4 glyphicon-plus img-circle text-info"></span>
                Adherir Obra Social </Link>
                <Link className="btn icon-btn btn-info" id="c4" to="/Bedin/financiador/entver">
                <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                Obras Sociales</Link>
              </div>
              <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">
                <h2 className="e4">Usuarios </h2>
                <Link to="/Bedin/financiador/usercrear" className="btn icon-btn btn-info" id="c4">
                <span className="glyphicon a4 glyphicon glyphicon-user img-circle text-info"></span>
                Generar Usuario  </Link>
                <Link to="/Bedin/financiador/userver"  className="btn icon-btn btn-info" id="c4" to = "/Bedin/hospital/userver">
                <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                Lista de Usuarios </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FinanciadorHome;

