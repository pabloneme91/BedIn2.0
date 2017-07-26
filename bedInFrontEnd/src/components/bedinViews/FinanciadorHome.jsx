import React from 'react';

import LargeButton from '../LargeButton.jsx';

function FinanciadorHome(props) {
  return (
    <div>
        <div className="container-fluid container-margin">
            <div className="row">
              <div className="col-xs-hidden col-sm-2 col-lg-2 col-xl-5"></div>
              <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">
                <h2 className="title">Obra Social</h2>
                <a className="btn icon-btn btn-info" id="radio" href="#">
                <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-info"></span>
                Adherir Obra Social </a>
                <a className="btn icon-btn btn-info" id="radio" href="#">
                <span className="glyphicon btn-glyphicon glyphicon glyphicon-list img-circle text-info"></span>
                Obras Sociales</a>
              </div>
              <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">
                <h2 className="title">Usuarios </h2>
                <a className="btn icon-btn btn-info" id="radio" href="#">
                <span className="glyphicon btn-glyphicon glyphicon glyphicon-user img-circle text-info"></span>
                Generar Usuario </a>
                <a className="btn icon-btn btn-info" id="radio" href="#">
                <span className="glyphicon btn-glyphicon glyphicon glyphicon-list img-circle text-info"></span>
                Lista de Usuarios </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FinanciadorHome;
