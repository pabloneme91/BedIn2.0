import React from 'react';

function TableDataFinanciador(props) {
	
	const allHospitals = hospitals => {
		return hospitals.map(singleHospital => 
			<p key = {singleHospital._id}> {singleHospital.name} </p>)
	}

	const tableBody = props.financiador.plans.map((plan, i) =>
    <tr key={i} style={{border:"1px solid black"}}>
      <td style={{border:"1px solid black"}}>{plan.name}</td>
      <td style={{border:"1px solid black"}}>{allHospitals(plan.hospitals)}
      </td>
    </tr>)

	return (
		<div>
			<div>
				<p>Name:  {props.financiador.name}</p>
				<p>Email: {props.financiador.email}</p>
			</div>
				<table style={{border:"1px solid black"}} className= "table">
				  <thead style={{border:"1px solid black"}}>
				    <tr>
				      <th style={{border:"1px solid black"}}>Plan</th>
				      <th style={{border:"1px solid black"}}>Hospitales del Plan</th>
				    </tr>
				  </thead>
				  <tbody>
						{tableBody}
				  </tbody>
				</table>
		</div>
	)
}

export default TableDataFinanciador;