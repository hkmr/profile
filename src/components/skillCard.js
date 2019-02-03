import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'


class SkillCard extends Component{

	render(){
		return(

			<Row>
			<Col sm={4} className="text-center">
				<h3 className="h3 text-monospace font-weight-bold">{this.props.name}</h3>
			</Col>
			<Col sm={8}>
				<ProgressBar variant={this.props.variant} now={this.props.percent} label={`${this.props.percent} %`} />
			</Col>
			</Row>

		);
	}

}

export default SkillCard;