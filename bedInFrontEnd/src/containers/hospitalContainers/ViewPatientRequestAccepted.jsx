import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/hospitalActions/patients';
import io from "socket.io-client";

import TableViewAcceptedPatientRequests from '../../components/hospitalViews/TableViewAcceptedPatientRequests.jsx';

function mapStateToProps(state) {
	return {
		isRequesting : state.patients.isRequesting,
		patients: state.patients.acceptedPatientsData
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

let socket;

class ViewAcceptedPatientRequest extends React.Component {
	constructor(props) {
		super(props);
		
		socket = io.connect('http://localhost:3030');
		this.setState = this.setState.bind(this);
		this.idInterval = null;
	}

	componentWillMount() {
		this.props.fetchGetAcceptedPatients();
		socket.on('newMatchPatient', () => this.props.fetchGetAcceptedPatients());
		/*this.idInterval = setInterval(() => {
			this.props.fetchGetAcceptedPatients();	
		},10000)*/
	}

	componentWillUnmount() {
		clearInterval(this.idInterval);
	}

	render() {
		let patients = (!this.props.patients) ? <p>Cargando...</p>
		: <TableViewAcceptedPatientRequests 
			patientsList = {this.props.patients} 
			setState = {this.setState}/>
		return (
			<div>
				{patients}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAcceptedPatientRequest);