import React from 'react';
import { Link } from 'react-router';

import Logout from '../components/Logout.jsx';

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Logout fetchLogout={this.props.logoutFetch} />
      </div>
    )
  }
}

export default LogoutContainer;
