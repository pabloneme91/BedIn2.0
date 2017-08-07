import React from 'react';

const tableStyle = {border:"1px solid black"};

const props = 
	{
		patients: [
			{
				fecha: '01/01/2017',
				documento: 3224973,
				plan: "01",
				CIE: "A01",
				complejidad: "Grado 1",
				hospital: {
					name: 'Fleming',
					_id: '1'
				},
			}
		]
	}

function TableViewAcceptedPatientRequests() {

	const tableBody = props.patients.map((patient, i) => 
		<tr style={tableStyle} key={patient.documento}>
			<td style={tableStyle}>{patient.fecha}</td>
			<td style={tableStyle}>{patient.documento}</td>
			<td style={tableStyle}>{patient.plan}</td>
			<td style={tableStyle}>{patient.CIE}</td>
			<td style={tableStyle}>{patient.complejidad}</td>
			<td style={tableStyle}>{patient.hospital.name}</td>
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
			    </tr>
			  </thead>
			  <tbody>
			  {tableBody}
			  </tbody>
			</table>
		</div>
	)
}

export default TableViewAcceptedPatientRequests;