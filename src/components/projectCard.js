import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class ProjectCard extends Component{

	render(){

		return(

			<Card>
				<Card.Img variant="top" src={this.props.image}/>
			    <Card.Body>
			      <Card.Title>
			      	<a href={this.props.link} className="text-decoration-none">{this.props.name}</a>
			      </Card.Title>
			      <Card.Text>{this.props.desc}</Card.Text>
			    </Card.Body>
			    <Card.Footer>
				    <small className="text-muted">by {this.props.owner}</small>
			    </Card.Footer>
			</Card>
		);

	}

}

export default ProjectCard;
