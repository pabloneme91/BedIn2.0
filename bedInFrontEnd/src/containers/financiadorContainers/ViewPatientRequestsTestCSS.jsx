import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as actionCreators from '../redux/actions/_ACCION';

import TableViewPatientRequests from '../../components/financiadorViews/TableViewPatientRequests.jsx';

/*function mapStateToProps(state) {
	return {
		_PROP1 : state._STATE1
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}
*/
class ViewPatientRequestsTestCSS extends React.Component {
	constructor(props) {
		super(props);
		this.sendPatient = this.sendPatient.bind(this);
	}

	sendPatient(info) {
		alert('ok');
	}	

	render() {
		return (
			<div>
				<TableViewPatientRequests sendPatient = {this.sendPatient}/>
			</div>
		)
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequests);

export default ViewPatientRequestsTestCSS;