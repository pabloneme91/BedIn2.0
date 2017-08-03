import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/formActions';

import AdminUserForm1 from '../components/bedinViews/AdminUserForm1.jsx';


function mapStateToProps(state) {
  return {
    isRequesting: state.formReducers.isRequesting,
    createSuccess: state.formReducers.createSuccess,
    requestFail: state.formReducers.requestFail,
    error: state.formReducers.error,
    name: state.formReducers.name,
    address: state.formReducers.address,
    phone:  state.formReducers.phone,
    email: state.formReducers.email,
    username: state.formReducers.username,
    password: state.formReducers.password,
    type: state.formReducers.type
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}



class AdminUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this)
  }

  componentWillUnmount() {
    this.props.resetCreateSuccess();
  }

  create(e) {
    e.preventDefault();
    this.props.createUser({
      name: e.target.nombre.value,
      address: e.target.direccion.value,
      phone: e.target.telefono.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      type: "Bedin"
    })
  }

  render() {
    return (
      <div>
        <AdminUserForm1 createUser={this.create} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserForm);
