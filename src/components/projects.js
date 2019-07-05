import React, { Component } from 'react';
import Card from './projectCard.js';
import {Container,CardDeck,Row,Col,Image} from 'react-bootstrap'
import completed from '../images/illustration/completed.svg';


class Projects extends Component{

	render(){

		return(

			<Container id={this.props.id} >
				<h1 className="h1 my-5 title-text">Projects Done :)</h1>
				
				<Row className="align-items-center">
					<Col sm={4}>
						<Image height={400} width={400} src={completed} />
					</Col>
					<Col className="offset-md-1" sm={6}>
						<CardDeck>
							{this.props.list.map((project) => {
								return(
									<Card
										key={project.id}
										name={project.name} 
										link={project.link} 
										image={project.image} 
										imageDesc="Harsh Kumar"
										owner={project.owner.name}
										desc={project.shortDesc}
									/>
								);
							
							})}
						</CardDeck>
					</Col>
				</Row>

			</Container>

		);

	}

}

export default Projects;