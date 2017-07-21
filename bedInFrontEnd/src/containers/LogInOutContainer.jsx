import React from 'react';
import { Link } from 'react-router';

import Login from '../components/Login.jsx';

class LogInOut extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login fetch={this.props.logInFetch} />
      </div>
    )
  }
}

export default LogInOut;
