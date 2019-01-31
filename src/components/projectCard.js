import React, { Component } from 'react';
import logo from '../logo.svg'
import 'bulma/bulma.sass';

class ProjectCard extends Component{

	render(){

		return(

			<div class="card">
			    <img src={this.props.image} class="card-img-top" alt={this.props.imageDesc}/>
			    <div class="card-body">
			      <h5 class="card-title font-weight-bold">
			      	<a href={this.props.link} class="text-decoration-none">{this.props.name}</a>
			      </h5>
			      <p class="card-text font-weight-normal">{this.props.desc}</p>
			      <p class="card-text"><small class="text-muted">by {this.props.owner}</small></p>
			    </div>
			</div>
		);

	}

}

export default ProjectCard;
