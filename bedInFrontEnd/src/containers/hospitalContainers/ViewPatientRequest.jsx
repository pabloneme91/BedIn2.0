import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/hospitalAction/patients';

//import _COMPONENT from '../components/_COMPONENT.jsx';

function mapStateToProps(state) {
	return {
		isRequesting : state.patients.patientsData
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class _CONTAINER extends React.Component {
	constructor(props) {
		super(props)
	}

	/*componentWillMount() {
		_FETCHFUNCTION
	}*/

	render() {
		return (
			<_COMPONENT props = {this.props._PROP1}>
				
			</_COMPONENT>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(_CONTAINER);