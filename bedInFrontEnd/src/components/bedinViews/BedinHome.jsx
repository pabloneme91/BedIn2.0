import React from 'react';

import GlobalNavbar from '../GlobalNavbar.jsx';

const navBarData = {
	linkArray: [
		{
			route: "/Bedin/financiador",
			name: "OBRAS SOCIALES"
		},
		{
			route: "/Bedin/hospital",
			name: "HOSPITAL"
		},
		{
			route: "/Bedin/admin",
			name: "ADMINISTRADOR"
		}
	],
	logo : '/public/img/logo_original.jpg'
}
	
class Home extends React.Component {
  constructor (props) {
		super(props)
  }
  render() {
    return (
      <div>
        <GlobalNavbar data={navBarData}/>
        {this.props.children}
      </div>
    );
  }
}

export default Home;

/*
<containercases localState>

		<containerForm funcionNext>
			<componenteForm1 >
				
			</componenteForm1>
		</containerForm>

		<containerPlanes funcionAgreg>
			<componentePlan-Hospital>
				
			</componentePlan-Hospital>
			<compnenteTabla>
				
			</compnenteTabla>
		</containerPlanes>

</containercases>
	*/