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
			route: "/Bedin/administrador",
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