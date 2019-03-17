import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav';

class ContactCard extends Component{

	render(){


		return(
			<div>
				<h1 className="h1">
					<Badge variant={this.props.variant}>
						<Nav.Link href={this.props.link} className="text-decoration-none" style={{color:'#fff'}}>{this.props.name}</Nav.Link>
					</Badge>
				</h1>
			</div>
		);

	}

}

export default ContactCard;