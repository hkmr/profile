import React, { Component } from 'react';
import {Container,CardDeck,Row,Col,Image} from 'react-bootstrap';
import Card from './achievementCard.js';
import winners from '../images/illustration/winners.svg';

class Achievement extends Component{

	render(){

		return(
			<Container id={this.props.id} >
				<h1 className="h1 my-5 title-text">Achievements @</h1>
				<Row className="align-items-center">
					<Col className="d-lg-none d-xl-none" sm={4}>
						<Image height={500} width={500} src={winners} />
					</Col>
					<Col sm={6}>
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
							
						</CardDeck><br/>
						<span>See more</span>
					</Col>
					<Col className="offset-md-1 d-sm-none d-md-none d-md-block d-lg-block d-none d-sm-block" sm={4}>
						<Image height={500} width={500} src={winners} />
					</Col>
				</Row>
			</Container>
		);
	}

}

export default Achievement;