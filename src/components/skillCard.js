import React, { Component } from 'react';
import {Container,Image,Col,ProgressBar,Card} from 'react-bootstrap';
import Skill from '../images/illustration/skills.svg';

class SkillCard extends Component{

	render(){
		return(

			<div className="m-2">
				<Image className="img-thumbnail" height={100} width={100} src={this.props.icon} />
				<p className="font-weight-bolder text-center">{this.props.name} <br/> {this.props.percent/10}/10 </p>
			</div>

		);
	}

}

export default SkillCard;