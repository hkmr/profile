import React, { Component } from 'react';
import Card from './contactCard.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Contact extends Component{

	render(){

		/*Follow on:

		1. Github
		2. Facebook
		3. Instagram
		4. Hackerrank
		5. Hackerearth
		6. Leetcode
		*/

		return(

			<Container id={this.props.id} >
				<h1 className="h1 my-5 text-center text-uppercase font-weight-bold text-black-50">Follow me</h1>
				<Row>
					<Col sm>
						<Card name="Facebook" variant="primary"/>
					</Col>
					<Col sm>
						<Card name="Twitter" variant="primary"/>
					</Col>
					<Col sm>
						<Card name="Github" variant="secondary" />
					</Col>
					<Col sm>
						<Card name="Hackerrank" variant="success" />
					</Col>
					<Col sm>
						<Card name="Hackerearth" variant="primary" />
					</Col>
					<Col sm>
						<Card name="Leetcode" variant="warning"/>
					</Col>
				</Row>

			</Container>

		);

	}

}

export default Contact;