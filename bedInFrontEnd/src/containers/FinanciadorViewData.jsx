import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/viewFinanciador';

import TableDataFinanciador from '../components/bedinViews/TableDataFinanciador.jsx';

function mapStateToProps(state) {
	return {
		isRequesting : state.viewFinanciadores.isRequesting,
		financiadores: state.viewFinanciadores.financiadores
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class FinanciadorDataView extends React.Component {
	constructor(props) {
		super(props)
	}

	/*componentWillMount() {
		_FETCHFUNCTION
	}*/

	render() {
		return (
			<div>
				alsdnlasdasldas
				<TableDataFinanciador>
				
			</TableDataFinanciador>
			</div>
			
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanciadorDataView);