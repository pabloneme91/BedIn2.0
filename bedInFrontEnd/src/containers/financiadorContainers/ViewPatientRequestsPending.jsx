import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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


class ViewPatientRequestsPending extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.fetchPendingPatientRequests();
	}

	render() {

		return (
			<div>
				<TableViewPendingPatientRequests listOfPending={this.props.pendingList} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequestsPending);

// const loading =
// 	(!this.props.pendingList) ? <p>LOADING...</p> : this.props.pendingList
//
// (!this.props.financiadores) ? <p>Cargando...</p>
// : this.props.financiadores.map(financiador =>
// 	<TableDataFinanciador key = {financiador._id} financiador = {financiador}/>)
