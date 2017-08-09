import React from 'react';

const tableStyle = {border:"1px solid black"};
const marginLeft = {marginLeft:"5px"}

const props =

	{
		patients: [
			{
				fecha: '01/01/2017',
				documento: 3224973,
				edad: "25",
				sexo: "F",
				plan: "01",
				CIE: "A01",
				complejidad: "Grado 1",
				allHospitals: [
					{
						name: 'Fleming',
						_id: '1'
					},
					{
						name: 'Los Arcos',
						_id: 2
					},
					{
						name: 'Padilla',
						_id: 3
					},
				],
				viewedHospitals: [
					{
						name: 'Los Arcos',
						_id: 2
					},
					{
						name: 'Padilla',
						_id: 3
					},
				],
				acceptedHospitals: [
					{
						name: 'Fleming',
						_id: '1'
					},
					{
						name: 'hospital test',
						_id: '4'
					},
				]
			}
		],
		matchHospital: (e) => {
			e.preventDefault();
			alert('matcheado')

		}
	}


function ViewPatientRequestsPendingTable(props) {

	const buildPendingTable = (listOfPending, acceptedByHospital) => {
		return listOfPending.map(hospital =>
			acceptedByHospital ?
			<p key={hospital._id} >{hospital.name}
      	<button type="button"
      		className="btn btn-success btn-xs"
      		style={marginLeft}
      		onClick={props.matchHospital}>
        	<span className="glyphicon glyphicon-ok"></span>
      	</button>
  		</p>
    	: <p key={hospital._id}>{hospital.name}</p>
    )
	}

	const tableBody = props.listOfPending.map((pending, i) =>
		<tr style={tableStyle} key={pending.dni}>

			<td style={tableStyle}>{pending.dateCreated}</td>
			<td style={tableStyle}>{pending.dni}</td>
			<td style={tableStyle}>{pending.age}</td>
			<td style={tableStyle}>{pending.sex}</td>
			<td style={tableStyle}>{pending.cie10}</td>
			<td style={tableStyle}>{pending.complexity}</td>
			<td style={tableStyle}>{pending.plan}</td>

			<td style={tableStyle}>
				{buildPendingTable(pending.allHospitals)}
			</td>
			<td style={tableStyle}>
				{buildPendingTable(pending.viewedHospitals)}
			</td>
			<td style={tableStyle}>
				{buildPendingTable(pending.acceptedHospitals, true)}
			</td>
		</tr>)

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
