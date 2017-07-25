import React from 'react';
import ReactDOM from 'react-dom';

import BedinNavbar from './BedinNavbar.jsx'

class Home extends React.Component {
  render() {
    return (
      <div>
        <BedinNavbar />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
