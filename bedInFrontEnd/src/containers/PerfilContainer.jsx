import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/viewUser';

import UserInformation from '../components/bedinViews/UserInformation.jsx';

function mapStateToProps(state) {
	return {
		users: state.viewUser.users,
		isRequesting: state.viewUser.isRequesting
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class PerfilContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.fetchGetUserById(this.props.params.id);
	}

	render() {
		const userInfo = (this.props.isRequesting) ? <p>Cargando..</p>
		: <UserInformation users = {this.props.users}/>
		return (
			<div>
				{userInfo}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfilContainer);