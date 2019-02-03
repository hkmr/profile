import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class About extends Component{

	render(){

		return(

			<Container id={this.props.id} >
			  <Row bsPrefix="justify-content-center">
			  	<Col>
			  		<h1 className="display-4 text-dark text-uppercase  font-weight-bold text-center">{this.props.name}</h1>
				  	<p className="lead text-center">{this.props.desc}</p>
			  	</Col>
			  </Row>
			</Container>

		);

	}

}

export default About;