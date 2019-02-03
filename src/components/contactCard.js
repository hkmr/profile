import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge'

class ContactCard extends Component{

	render(){


		return(
			<div>
				<h1 className="h1">
					<Badge variant={this.props.variant}>
						<a href="link" className="text-decoration-none" style={{color:'#fff'}}>{this.props.name}</a>
					</Badge>
				</h1>
			</div>
		);

	}

}

export default ContactCard;