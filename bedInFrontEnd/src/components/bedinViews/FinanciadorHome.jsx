import React from 'react';

import { Link } from 'react-router';

import LargeButton from '../LargeButton.jsx';

import { Link } from 'react-router';

function FinanciadorHome(props) {
  return (
    <div>
      <div className="container-fluid container-margin">
        <div className="row">
          <div className="col-xs-hidden col-sm-2 col-lg-2 col-xl-5"></div>
          <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">

            <h2 className="title">Obra Social</h2>

            <Link to="Bedin/financiador/entcrear" className="btn icon-btn btn-info" id="radio">
              <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-info"></span>
              Adherir Obra Social
            </Link>

            <Link to="/Bedin/financiador/entver" className="btn icon-btn btn-info" id="radio">
              <span className="glyphicon btn-glyphicon glyphicon glyphicon-list img-circle text-info"></span>
              Obras Sociales
            </Link>

          </div>

          <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">

            <h2 className="title">Usuarios </h2>

            <Link to="#" className="btn icon-btn btn-info" id="radio">
              <span className="glyphicon btn-glyphicon glyphicon glyphicon-user img-circle text-info"></span>
              Generar Usuario
            </Link>

            <Link to="/Bedin/financiador/userver" className="btn icon-btn btn-info" id="radio">
              <span className="glyphicon btn-glyphicon glyphicon glyphicon-list img-circle text-info"></span>
              Lista de Usuarios
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default FinanciadorHome;
