import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as actionCreators from '../redux/actions/_ACCION';

import TableViewPendingPatientRequests from '../../components/financiadorViews/TableViewPendingPatientRequests.jsx';
import TableViewAcceptedPatientRequests from '../../components/financiadorViews/TableViewAcceptedPatientRequests.jsx';
/*function mapStateToProps(state) {
	return {
		_PROP1 : state._STATE1
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}
*/
class ViewPatientRequestsPending extends React.Component {
	constructor(props) {
		super(props);
		this.sendPatient = this.sendPatient.bind(this);
		this.pacientType = 'Pending';
	}

	sendPatient(info) {
		alert('ok');
	}

	componentWillMount() {

	}

	render() {
		const selectTable = (this.pacientType === 'Pending') ?
		<TableViewPendingPatientRequests sendPatient = {this.sendPatient}/>
		: <p>hola</p>
		return (

			<div>
				{selectTable}
			</div>
		)
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequests);

export default ViewPatientRequestsPending;
