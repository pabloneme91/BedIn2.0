import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from "socket.io-client";
import * as actionCreators from '../../redux/actions/financiadorActions/patientRequestCreateView';

import TableViewPendingPatientRequests from '../../components/financiadorViews/TableViewPendingPatientRequests.jsx';


function mapStateToProps(state) {
  return {
		isRequesting: state.patientRequestReducers.isRequesting,
		receivePending: state.patientRequestReducers.receivePending,
		pendingList: state.patientRequestReducers.pendingList,
		error: state.patientRequestReducers.error
  }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

let socket;

class ViewPatientRequestsPending extends React.Component {
	constructor(props) {
		super(props);
		socket = io.connect("http://localhost:3030");
		
		this.matchHospital = this.matchHospital.bind(this);
	}


	componentWillMount() {
		this.props.fetchPendingPatientRequests();
		socket.on('patientStateUpdated', () => {
			this.props.fetchPendingPatientRequests();
		})
	}

	componentWillUnmount() {
		clearInterval(this.idInterval)
	}

	matchHospital(idPatientRequest, idHospital) {
		this.props.matchWithHospital(socket, {idPatientRequest, idHospital})
	}

	render() {
    const tableRequests = this.props.isRequesting ? <p>Cargando..</p>
    : <TableViewPendingPatientRequests listOfPending={this.props.pendingList} 
    matchHospital = {this.matchHospital}/>
		return (
			<div>
				{tableRequests}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequestsPending);