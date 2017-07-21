import React from 'react';
import { Form } from 'react-pure';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
      	<div>
      		<div className="portada"></div>

      		<div>
				<div className="container">
					<div className="row">
						  <div className="col-xs-2 col-sm-4 col-lg-5"></div>
						  <div className="col-xs-8 col-sm-6 col-lg-4 ">
							<form>
							  <div className="input-group" id="trasparencia">
							    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
							    <input id="email" type="text" className="form-control" name="Username" placeholder="Username"></input>
							  </div>

							  <div className="input-group">
							    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
							    <input id="password" type="password" className="form-control" name="password" placeholder="Password"></input>
							  </div>

							  <button type="button" className=" btn button" id="button">Login</button><br></br>
							  <p id="p">¿No estas registrado? <a id="Sing_up" href="">Sing Up</a></p>
		    				</form>
						  </div>
					</div>
				</div>
			</div>
		</div>
	 )
  }
}

export default Login;
