import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as actionCreators from '../redux/actions/_ACCION';

import FormCreatePatient from '../../components/financiadorViews/FormCreatePatient.jsx';

/*function mapStateToProps(state) {
	return {
		_PROP1 : state._STATE1
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}
*/
class CreatePatienteContainerTestCSS extends React.Component {
	constructor(props) {
		super(props);
		this.sendPatient = this.sendPatient.bind(this);
	}

	sendPatient(info) {
		alert('ok');
	}	

	render() {
		return (
			<FormCreatePatient sendPatient = {this.sendPatient}/>
		)
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(CreatePatienteContainer);

export default CreatePatienteContainerTestCSS;