import React from 'react';

import { Link } from 'react-router';

function genericNavbar (props) {
  const links = props.data.linkArray.map((linkData,i) => 
    <li className="margenes" key={i}>
      <Link to = "Bedin/financiador">{linkData.name}</Link>
    </li>      
  )
  const logo = props.data.logo; 
  return (

    <div>
      <div className="portada"></div>

      <nav className="navbar navbar-default" id="navbar" >
        <div className="container-fluid" >

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            </button>
            <Link to="/" className="navbar-brand"><img src={logo} width="30" height="30" 
              alt=""></img></Link>
          </div>

          <div className="collapse navbar-collapse margenes" id="bs-example-navbar-collapse-1" id="navbar_bed">
            <ul className="nav navbar-nav" id="nav" >
            {links}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">USUARIO <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="#">Perfil</Link></li>
                  <li><Link to="#">Log Out <span className="glyphicon glyphicon-off" aria-hidden="true"></span></Link></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default genericNavbar;
