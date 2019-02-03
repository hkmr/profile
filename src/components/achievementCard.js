import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
				<Card.Header>{this.props.title}</Card.Header>
			    <Card.Body>
			      <Card.Title>Primary Card Title</Card.Title>
			      <Card.Text>
			        {this.props.desc}
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			    	<Button variant="outline-primary" onClick={this.handleShow}>
			    		Click
			    	</Button>
			    	<Modal centered="true" show={this.state.show} onHide={this.handleClose}>
			          <Modal.Header closeButton>
			            <Modal.Title>Modal heading</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			          <Modal.Footer>
			            <Button variant="secondary" onClick={this.handleClose}>
			              Close
			            </Button>
			            <Button variant="primary" onClick={this.handleClose}>
			              Save Changes
			            </Button>
			          </Modal.Footer>
			        </Modal>
			    </Card.Footer>
			</Card>

		);

	}

}

export default AchievementCard;