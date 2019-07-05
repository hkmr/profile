import React, { Component } from 'react';
import {Container, Image} from 'react-bootstrap';

class Contact extends Component{

	render(){
		
		return(

			<Container id={this.props.id} >
				<h1 className="h1 my-5 title-text">Follow me</h1>

				<div className="list-group list-group-horizontal">
					{this.props.socialLinks.map((socialLink) => {

						return(
							<div className="block">
								<a href={socialLink.link} title={socialLink.platform} target="_blank">
									<Image src={socialLink.icon} width={64} height={64} alt={socialLink.platform} />
								</a>
							</div>
						);

					})}
				</div>
				
			</Container>

		);

	}

}

export default Contact;