import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

const nav = require('./styles/Navbar.ncss');

class BedinNavbar extends React.Component {
  render() {
    return (
      <div className={nav.navbar}>

        <ul className={nav.nav_ul}>
          <li className={nav.nav_li}><Link to="/">Bed In Logo Goes Here</Link></li>
          <li className={nav.nav_li}><Link to="/home">Bed In Home</Link></li>
          <li className={nav.nav_li}>Financiador</li>
          <li className={nav.nav_li}>Hospital</li>
          <li className={nav.nav_li}>Admin</li>
          <li className={nav.nav_li}>Log Out</li>
        </ul>

      </div>
    );
  }
}

export default BedinNavbar;
