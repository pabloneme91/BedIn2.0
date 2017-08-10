import React from 'react';

const tableStyle = {border:"1px solid black"};

function ViewPatientRequestsMatchedTable(props) {

	const tableBody = props.patients.map((patient, i) =>
		<tr style={tableStyle} key={patient.dni}>
			<td style={tableStyle}>{patient.dateCreated}</td>
			<td style={tableStyle}>{patient.dni}</td>
			<td style={tableStyle}>{patient.healthcareplan.name}</td>
			<td style={tableStyle}>{patient.cie10}</td>
			<td style={tableStyle}>{patient.complexity}</td>
			<td style={tableStyle}>{patient.sentTo.hospital.name}</td>
			<td style={tableStyle}>{patient.sentTo.userFinanciador.username}</td>
		</tr>)

	return (
		<div>
			<table style={{border:"1px solid black"}} className= "table">
			  <thead style={{border:"1px solid black"}}>
			    <tr>
			    	<th style={{border:"1px solid black"}}>Fecha</th>
			      <th style={{border:"1px solid black"}}>DNI</th>
			      <th style={{border:"1px solid black"}}>Plan</th>
			      <th style={{border:"1px solid black"}}>CIE</th>
			      <th style={{border:"1px solid black"}}>Complejidad</th>
			      <th style={{border:"1px solid black"}}>Hospital</th>
			      <th style={{border:"1px solid black"}}>Usuario</th>
			    </tr>
			  </thead>
			  <tbody>
			  {tableBody}
			  </tbody>
			</table>
		</div>
	)
}

export default ViewPatientRequestsMatchedTable;
