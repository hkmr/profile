import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


class AchievementCard extends Component{

	constructor(props, context) {
	    super(props, context);

	    this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);

	    this.state = {
	      show: false,
	    };
	  }

	  handleClose() {
	    this.setState({ show: false });
	  }

	  handleShow() {
	    this.setState({ show: true });
	  }

	render(){

		return(

			<Card border={this.props.border}>
			    <Card.Body>
			      <Card.Title>{this.props.title}</Card.Title>
			      <Card.Text>
			        {this.props.shortDesc}
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			    	<Button variant="outline-primary" onClick={this.handleShow}>
			    		Detail
			    	</Button>
						{/* Modal */}
			    	<Modal centered="true" size="lg" show={this.state.show} onHide={this.handleClose}>
			          <Modal.Header closeButton>
			            <Modal.Title>{this.props.title}</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
									<Image src={this.props.image} fluid="true" />
			          	{this.props.desc}
			          </Modal.Body>
			          <Modal.Footer>
			            <Button variant="secondary" onClick={this.handleClose}>
			              Close
			            </Button>
			            <Button href={this.props.link} variant="primary">
			              Link
			            </Button>
			          </Modal.Footer>
			        </Modal>
			    </Card.Footer>
			</Card>

		);

	}

}

export default AchievementCard;