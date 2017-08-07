import React from 'react';

function TableDataUserBedin(props) {
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
					<div className="col-xs-2 col-sm-2 col-lg-2"></div>
					<div className="col-xs-2 col-sm-8 col-lg-8">
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
					<div className="col-xs-2 col-sm-2 col-lg-2"></div>
				</div>
			</div>

		</div>
	)
}

export default TableDataUserBedin;