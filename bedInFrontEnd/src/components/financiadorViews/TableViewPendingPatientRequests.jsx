import React from 'react';


function ViewPatientRequestsPendingTable(props) {
	const tableStyle = {border:"1px solid black"};
	const marginLeft = {marginLeft:"5px"};
	const color = {backgroundColor : 'red'}
	
	const buildPendingTable = (listOfPending = [], acceptedByHospital, idPending) => {
		return listOfPending.map(eachPending =>
			acceptedByHospital ?
			<p key={eachPending.hospital._id} >{eachPending.hospital.name}
      	<button type="button" className="btn btn-success btn-xs" style={marginLeft} 
      		onClick={() => props.matchHospital(idPending,eachPending.hospital._id)}>
        	<span className="glyphicon glyphicon-ok"></span>
      	</button>
  		</p>
    	: <p key={eachPending.hospital._id}>{eachPending.hospital.name}</p>
		)
	}

	const tableBody = props.listOfPending.map((pending, i) => {
		let colorStyle;
		(pending.sentTo.hospital) ? colorStyle = color
		: colorStyle = null 
		return ( <tr style={Object.assign({}, tableStyle, colorStyle)} key={pending.dni}>

				<td style={tableStyle}>{pending.dateCreated}</td>
				<td style={tableStyle}>{pending.dni}</td>
				<td style={tableStyle}>{pending.age}</td>
				<td style={tableStyle}>{pending.sex}</td>
				<td style={tableStyle}>{pending.cie10}</td>
				<td style={tableStyle}>{pending.complexity}</td>
				<td style={tableStyle}>{pending.healthcareplan.name}</td>

				<td style={tableStyle}>
					{buildPendingTable(pending.allRequestedHospitals)}
				</td>
				<td style={tableStyle}>
					{buildPendingTable(pending.viewedByHospitals)}
				</td>
				<td style={tableStyle}>
					{buildPendingTable(pending.acceptedByHospital,true, pending._id)}
				</td>

			</tr>
			)
		})
		
	return (
		<div>
			<table style={{border:"1px solid black"}} className= "table">
			  <thead style={{border:"1px solid black"}}>
			    <tr>
			    	<th style={{border:"1px solid black"}}>Fecha/Hora</th>
						<th style={{border:"1px solid black"}}>DNI</th>
						<th style={{border:"1px solid black"}}>Edad</th>
						<th style={{border:"1px solid black"}}>Sexo</th>
						<th style={{border:"1px solid black"}}>CIE 10</th>
						<th style={{border:"1px solid black"}}>Complejidad de Cama</th>
						<th style={{border:"1px solid black"}}>Plan</th>

			      <th style={{border:"1px solid black"}}>Hospitales Solicitados:</th>
			      <th style={{border:"1px solid black"}}>Visto Por:</th>
			      <th style={{border:"1px solid black"}}>Aceptado Por:</th>
			    </tr>
			  </thead>
			  <tbody>
			  {tableBody}
			  </tbody>
			</table>
		</div>
	)
}

export default ViewPatientRequestsPendingTable;
