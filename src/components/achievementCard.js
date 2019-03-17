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
						{/* Modal */}
			    	<Modal centered="true" size="lg" show={this.state.show} onHide={this.handleClose}>
			          <Modal.Header closeButton>
			            <Modal.Title>{this.props.title}</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
			          	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			          </Modal.Body>
			          <Modal.Footer>
			            <Button variant="secondary" onClick={this.handleClose}>
			              Close
			            </Button>
			            <Button href={this.props.link} variant="primary">
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