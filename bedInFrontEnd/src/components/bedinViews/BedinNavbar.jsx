import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';


class BedinNavbar extends React.Component {
  render() {
    return (

      <div >
        <div className="portada"></div>
          <nav className="navbar navbar-default" id="navbar" >
              <div className="container-fluid" >
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                              <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>me
                                      <span className="icon-bar"></span>
                              </button>
                     
                         <Link to="/" className="navbar-brand"><img src="/public/img/drawing2.png" width="60" height="20" alt=""></img></Link>
                              </div>
                         <div className="collapse navbar-collapse margenes" id="bs-example-navbar-collapse-1" id="navbar_bed">
                            <ul className="nav navbar-nav" id="nav" >
                              <li className="margenes"><Link to="/Bedin/financiador">OBRAS SOCIALES</Link></li>
                              <li className="margenes"><Link to="/Bedin/hospital">HOSPITALES</Link></li>
                              <li className="margenes"><Link to="/Bedin/admin">ADMINISTRADOR</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                              <li className="dropdown">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">USUARIO <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                  <li><Link to="#">Perfil</Link></li>
                                  <li><Link to="#">Log Out <span className="glyphicon glyphicon-off"  aria-hidden="true"></span></Link></li>
                            </ul>
                              </li>
                            </ul>
                  </div>
              </div>
          </nav>
      </div>
    );
  }
}

export default BedinNavbar;
