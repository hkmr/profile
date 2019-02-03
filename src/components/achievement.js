import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from './achievementCard.js'
import CardDeck from 'react-bootstrap/CardDeck'


class Achievement extends Component{

	render(){

		return(

			<Container id={this.props.id} >
				<h1 className="h1 my-5 text-center text-uppercase font-weight-bold text-black-50">Achievements</h1>
				<CardDeck>
					<Card 
						border="primary" 
						title="Achievement 1"
						desc="Some quick example text to build on the card title and make up the bulk of the cards content." />
					<Card 
						border="success" 
						title="Achievement 2"
						desc="Some quick example text to build on the card title and make up the bulk of the cards content." />
					<Card 
						border="primary" 
						title="Achievement 3"
						desc="Some quick example text to build on the card title and make up the bulk of the cards content." />
					<Card 
						border="success" 
						title="Achievement 4"
						desc="Some quick example text to build on the card title and make up the bulk of the cards content." />
					


				</CardDeck>
			</Container>
		);

	}

}

export default Achievement;