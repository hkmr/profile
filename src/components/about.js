import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import profile from '../images/profile/harsh-kumar.png';

class About extends Component{

	render(){

		return(

			<div class="jumbotron bg-white">
			  <img src={profile} class=" w-25 rounded-circle mx-auto d-block" alt="..."/>
			  <h1 class="display-4 text-dark text-uppercase font-weight-bold text-center">{this.props.name}</h1>
			  <p class="lead text-center">{this.props.desc}</p>
			</div>

		);

	}

}

export default About;