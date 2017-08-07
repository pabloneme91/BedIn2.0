import React from 'react';

function TableDataUserFinanciador(props) {
	const users = props.users.map(user =>
		<tr key = {user._id}>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.createdAt}</td>
			<td>{user.workplace || 'Bedin'}</td>
			<td>{user.rol || 'Admin'}</td>
		</tr>
	)
	return (
		<div>
			
			<div className="container">
				<div className="row">
					<div className="col-xs-2 col-sm-1 col-lg-1"></div>
					<div className="col-xs-2 col-sm-10 col-lg-10">
						<table className = "table" >
							<thead>
								<tr>
									<th>NOMBRE</th>
									<th>USUARIO</th>
									<th>FECHA DE CREACIÓN</th>
									<th>ENTIDAD</th>
									<th>ROL</th>
								</tr>
							</thead>
							<tbody>
							{users}
							</tbody>
						</table>
					</div>
					<div className="col-xs-2 col-sm-10 col-lg-10"></div>
				</div>
			</div>

		</div>
	)
}

export default TableDataUserFinanciador;