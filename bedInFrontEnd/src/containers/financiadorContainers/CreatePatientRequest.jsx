 import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/financiadorActions/patientRequestCreateView';
import io from "socket.io-client";

import CreatePatientRequestForm from '../../components/financiadorViews/CreatePatientRequestForm.jsx';

let socket;
function mapStateToProps(state) {
  return {
		isRequesting: state.patientRequestReducers.isRequesting,
	  createSuccess: state.patientRequestReducers.createSuccess,
	  dni: state.patientRequestReducers.dni,
	  age: state.patientRequestReducers.age,
	  sex: state.patientRequestReducers.sex,
	  cie10: state.patientRequestReducers.cie10,
	  complexity: state.patientRequestReducers.complexity,
	  patientPlan: state.patientRequestReducers.patientPlan,
	  dateCreated: state.patientRequestReducers.dateCreated,
	  hospitalsRequested: state.patientRequestReducers.hospitalsRequested,
		plans: state.patientRequestReducers.plans,
		error: state.patientRequestReducers.error
  }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}


class CreatePatientRequest extends React.Component {
	constructor(props) {
		super(props);
		socket = io.connect("http://localhost:3030");
		this.create = this.create.bind(this)
	}

	componentWillMount() {
    this.props.fetchPlanList();
  }

	create(e) {
		e.preventDefault();
		let selectedSex = document.getElementById("sex-select").value;
		let selectedComplexity = document.getElementById("complexity-select").value;
		let selectedPlan = e.target.plan.value;

    this.props.createPatientRequest(socket, {
      dni: e.target.dni.value,
      age: e.target.edad.value,
      sex: selectedSex,
			cie10: e.target.cie.value,
			complexity: selectedComplexity,
			healthcareplan: selectedPlan
    })
  }

	componentWillUnmount() {
    this.props.resetCreateSuccess();
  }

	render() {
		return (
			<CreatePatientRequestForm plans={this.props.plans} createRequest={this.create} success={this.props.createSuccess} />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatientRequest);
