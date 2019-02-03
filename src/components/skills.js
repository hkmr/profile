import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from './skillCard.js'

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
				<h1 className="h1 my-5 text-center text-uppercase font-weight-bold text-black-50">Skills</h1>
				  
				<Card name="Html" percent="60" variant="sucess" />
				<Card name="CSS" percent="80" variant="success" />
				<Card name="Java" percent="80" variant="success" />
				<Card name="JavaScript" percent="50" variant="warning" />
				<Card name="C" percent="80" variant="success" />
				<Card name="CPP" percent="40" variant="danger" />

			</Container>

		);
	}

}

export default Skills;