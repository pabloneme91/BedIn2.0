import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/hospitalActions/patients';

import TableViewPendingPatientRequests from '../../components/hospitalViews/TableViewPendingPatientRequests.jsx';

function mapStateToProps(state) {
	return {
		isRequesting : state.patients.isRequesting,
		patients: state.patients.patientsData
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class ViewPatientRequest extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.fetchGetPatients();
	}

	render() {
		patients = isRequesting ? <p>Cargando...</p>
		: <TableViewPendingPatientRequests props = {this.props}/> 
		return (
			<div>
				{patients}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequest);