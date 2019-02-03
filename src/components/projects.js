import React, { Component } from 'react';
import Card from './projectCard.js';
import logo from '../logo.svg'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'


class Projects extends Component{

	/*
	Project properties:
		Name
		Github link
		Short description
		Image
		Owner Name

	
	*/
	render(){

		return(

			<Container id={this.props.id} >
				<h1 className="h1 my-5 text-center text-uppercase font-weight-bold text-black-50">Projects</h1>
				<CardDeck>

					<Card 
						name="First" 
						link="www.google.com" 
						image={logo} 
						imageDesc="Harsh Kumar"
						owner="Harsh Kumar"
						desc="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					/>
					<Card 
						name="Second" 
						link="www.google.com" 
						image={logo} 
						imageDesc="Harsh Kumar"
						owner="Harsh Kumar"
						desc="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					/>
					<Card 
						name="Third" 
						link="www.google.com" 
						image={logo} 
						imageDesc="Harsh Kumar"
						owner="Harsh Kumar"
						desc="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					/>
					<Card 
						name="Fourth" 
						link="www.google.com" 
						image={logo} 
						imageDesc="Harsh Kumar"
						owner="Harsh Kumar"
						desc="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					/>

				</CardDeck>

				<div class="d-flex justify-content-center">
					<a href="/projectlist.html" class="btn btn-outline-primary my-5" role="button" aria-pressed="true">see all</a>
				</div>

			</Container>

		);

	}

}

export default Projects;