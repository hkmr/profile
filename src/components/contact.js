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
						<Card name="Facebook" link={this.props.links.facebook} variant="primary"/>
					</Col>
					<Col sm>
						<Card name="Twitter" link={this.props.links.twitter} variant="primary"/>
					</Col>
					<Col sm>
						<Card name="Github" link={this.props.links.github} variant="secondary" />
					</Col>
					<Col sm>
						<Card name="Hackerrank" link={this.props.links.hackerrank} variant="success" />
					</Col>
					<Col sm>
						<Card name="Hackerearth" link={this.props.links.hackerearth} variant="primary" />
					</Col>
					<Col sm>
						<Card name="CodeChef" link={this.props.links.codechef} variant="warning"/>
					</Col>
					<Col sm>
						<Card name="Leetcode" link={this.props.links.leetcode} variant="warning"/>
					</Col>
					<Col sm>
						<Card name="Medium" link={this.props.links.medium} variant="warning"/>
					</Col>
					<Col sm>
						<Card name="Instagram" link={this.props.links.instagram} variant="warning"/>
					</Col>
					<Col sm>
						<Card name="LinkedIn" link={this.props.links.linkedin} variant="warning"/>
					</Col>
				</Row>

			</Container>

		);

	}

}

export default Contact;