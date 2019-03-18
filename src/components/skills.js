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
				  
				{this.props.list.map(skill => {
					return(
						<Card key={skill.id} name={skill.name} percent={skill.level} variant="sucess" />
					);
				})}

			</Container>

		);
	}

}

export default Skills;