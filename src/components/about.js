import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import welcome from '../images/illustration/hello.svg'

class About extends Component{

	render(){

		return(

			<Container id={this.props.id} >
			  <Row className="align-items-center justify-content-md-center">
				<Col sm={4}>
					<Image height={453} width={395} src={welcome} />
				</Col>
			  	<Col className="offset-md-1" sm={6}>						
				  	<h1 className="display-3 text-dark text-center">Hi, I'm {this.props.name}</h1>
					<p className="display-4 text-center">{this.props.quote}</p>
			  	</Col>
			  </Row>
			</Container>

		);

	}

}

export default About;