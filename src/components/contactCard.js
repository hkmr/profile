import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {hackerrank} from '../images/brand-icons/hackerrank.svg';

class ContactCard extends Component{

	render(){


		return(
			<div>
				<h1 class="h1">
					<span class="badge badge-secondary">
						<a href="link" class="text-decoration-none" style={{color:'#fff'}}>{this.props.name}</a>
					</span>
				</h1>
			</div>
		);

	}

}

export default ContactCard;