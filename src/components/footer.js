import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav'

class Footer extends Component{

	render(){

		return(
			<Nav className="justify-content-end" id={this.props.id} >
			    <Nav.Item>
			      all right reserved
			    </Nav.Item>
			  </Nav>
		);
	}
}

export default Footer;