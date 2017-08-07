import React from 'react';

function TableDataHospital(props) {
	const hospitals = props.hospitals.map(hospital =>
		<tr key = {hospital._id}>
			<td>{hospital.name}</td>
		</tr>
	)

return (

	<div>
		<div className="container a1">
	        <div className="row">
	          	<div className="col-xs-2 col-sm-1 col-lg-1"></div>
	          	<div className="col-xs-2 col-sm-10 col-lg-10">
					<table className = "table" >
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
				</div>
				<div className="col-xs-2 col-sm-1 col-lg-1"></div>
			</div>
		</div>
	</div>
		)
}

export default TableDataHospital;