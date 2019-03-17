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

					{this.props.list.map((project) => {
						return(
							<Card 
								name={project.name} 
								link={project.link} 
								image={logo} 
								imageDesc="Harsh Kumar"
								owner={project.owner.name}
								desc={project.shortDesc}
							/>
						);
					
					})}

				</CardDeck>

				<div className="d-flex justify-content-center">
					<a href="/projectlist.html" className="btn btn-outline-primary my-5" role="button" aria-pressed="true">see all</a>
				</div>

			</Container>

		);

	}

}

export default Projects;