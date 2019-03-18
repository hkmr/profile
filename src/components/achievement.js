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
					{this.props.list.map((achievement) => {
						return(
							<Card 
							key={achievement.id}
							border="primary" 
							title={achievement.title}
							link={achievement.link}
							shortDesc={achievement.shortDesc}
							desc={achievement.description}
							image={achievement.image} />
						)

					})}
					
				</CardDeck>
			</Container>
		);

	}

}

export default Achievement;