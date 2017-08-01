import React from 'react';

function TableDataHospital(props) {
	const hospitals = props.hospitals.map(hospital =>
		<tr key = {hospital._id}>
			<td>{hospital.name}</td>
		</tr>
	)
	return (
		<table className = "table">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Direccion</th>
					<th>Telefono</th>
				</tr>
			</thead>
			<tbody>
				{hospitals}
			</tbody>
		</table>
	)
}

export default TableDataHospital;