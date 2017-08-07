import React from 'react';

import LargeButton from '../LargeButton.jsx';

import { Link } from 'react-router';

function opcionHome(props) {
  return (
      <div>
        
        <div className="container-fluid b4">
          <div className="row" >
            <div className="col-xs-12 col-sm-2 col-lg-1  col-xl-2 " id="e7"  ></div>
            <div className="col-xs-12 col-sm-4 col-lg-3 col-xl-3 oh">
                <div id="a7">
 
                  <h2 className="e4">Obra Social</h2>
                  <Link to="/Bedin/financiador/entcrear" className="btn icon-btn btn-info" id="c4">
                  <span className="glyphicon a4 glyphicon-plus img-circle text-info"></span>
                  Adherir Obra Social </Link>
                  <Link to="/Bedin/financiador/entver" className="btn icon-btn btn-info" id="c4">
                  <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                  Obras Sociales</Link>
               
                
                  <h2 className="e4">Usuarios </h2>
                  <Link to="/Bedin/financiador/usercrear" className="btn icon-btn btn-info" id="c4">
                  <span className="glyphicon a4 glyphicon glyphicon-user img-circle text-info"></span>
                  Generar Usuario  </Link>
                  <Link to="/Bedin/financiador/userver"  className="btn icon-btn btn-info" id="c4">
                  <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                  Lista de Usuarios </Link>
         

                </div>
            </div>
            
            <div className="col-xs-12 col-sm-4 col-lg-3 col-xl-3 oh">
                <div id="b7">
                  
                  <h2 className="e4">Hospital</h2>
                    <Link to="Bedin/hospital/entcrear" className="btn  btn-info" id="c4">
                      <span className="glyphicon a4 glyphicon-plus img-circle text-info"></span>
                      Adherir Hospital
                    </Link>
                    <Link className="btn btn-info" id="c4" to="/Bedin/hospital/entver">
                      <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                      Lista de Hospitales
                    </Link>
                    <h2 className="e4">Usuarios </h2>
                    <Link to="Bedin/hospital/usercrear" className="btn btn-info" id="c4">
                      <span className="glyphicon a4 glyphicon glyphicon-user img-circle text-info"></span>
                      Generar Usuario
                    </Link>
                    <Link to="/Bedin/hospital/userver" className="btn   btn-info" id="c4">
                      <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                      Lista de Usuarios
                    </Link>          
                                    
                </div>
            </div>

            <div className="col-xs-12 col-sm-4 col-lg-3 col-xl-3 oh">
              <div id="c7">

                <h2 className="e4">Usuarios</h2>
                <Link to="/Bedin/administrador/usercrear" className="btn icon-btn btn-info" id="c4">
                  <span className="glyphicon a4 glyphicon glyphicon-user img-circle text-info"></span>
                  Generar Usuario
                </Link>
                <Link to="/Bedin/administrador/userver" className="btn icon-btn btn-info" id="c4">
                  <span className="glyphicon a4 glyphicon glyphicon-list img-circle text-info"></span>
                  Lista de Usuarios
                </Link>                 
                
               </div>
            </div>

            <div className="col-xs-12 col-sm-4 col-lg-1 col-xl-1 " id="d7"></div>

          </div>
        </div>

      </div>
    )
}

export default opcionHome;