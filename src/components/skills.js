import React, { Component } from 'react'
import {Container,CardDeck,Row,Col,Image} from 'react-bootstrap';
import Card from './skillCard.js';
import Skill from '../images/illustration/skills.svg';

/*
 variant colors:
 	1. success
 	2. info
 	3. warning
 	4. danger

*/
class Skills extends Component{

	render(){
		return(

			<Container id={this.props.id} >
				<h1 className="h1 my-5 title-text">Got Some Skills $$</h1>
				<Row className="align-items-center">
					<Col sm={6}>
						<CardDeck>
						{this.props.list.map(skill => {
							return(
								<Card key={skill.id} icon={skill.icon} name={skill.name} percent={skill.level} variant="sucess" />
							);
						})}
						</CardDeck>
					</Col>
					<Col className="offset-md-1" sm={4}>
						<Image height={500} width={500} src={Skill} />
					</Col>
				</Row>

			</Container>

		);
	}

}

export default Skills;