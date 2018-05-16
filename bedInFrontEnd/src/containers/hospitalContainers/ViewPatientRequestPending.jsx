import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/hospitalActions/patients';
import io from "socket.io-client";

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

let socket;

class ViewPatientRequest extends React.Component {
	constructor(props) {
		super(props);
		socket = io.connect('http://localhost:3030')
		this.setState = this.setState.bind(this);
	}

	componentWillMount() {
		this.props.fetchGetPatients();
		socket.on('newPatient', newPatient => {
			this.props.addPatientRequest(newPatient)
		})
		//this.props.fetchGetPatients();
		/*this.idInterval = setInterval(() => {
			this.props.fetchGetPatients();
		},10000)*/
	}

	componentWillUnmount() {
		clearInterval(this.idInterval);
	}

	setState(idPatient,state) {
		//this.props.fecthSetPatientState(idPatient, state)
		this.props.socketSetPatientState(socket, {idPatient, state});
	}

	render() {
		//let patients = (!this.props.patients.length) ? <p>Cargando...</p>
		let patients = (this.props.isRequesting) ? <p>Cargando...</p>
		: <TableViewPendingPatientRequests 
			patientsList = {this.props.patients} 
			setState = {this.setState}/>
		return (
			<div>
				{patients}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequest);