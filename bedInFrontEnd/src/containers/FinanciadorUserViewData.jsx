import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/viewUserFinanciador';

import TableDataUserFinanciador from '../components/bedinViews/TableDataUserFinanciador.jsx';

function mapStateToProps(state) {
	return {
		usersFinanciador : state.viewUserFinanciador.usersFinanciador,
		isRequesting: state.viewUserFinanciador.isRequesting
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class FinanciadorUserViewData extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.fetchGetUsersByType('Financiador');
	}

	render() {
		const dataUserFinanciador = (this.props.usersFinanciador === null) 
		? <p>Cargando...</p>
		: <TableDataUserFinanciador users = {this.props.usersFinanciador}/> 
		return (
			<div>
				{dataUserFinanciador}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanciadorUserViewData);