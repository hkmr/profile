import React, {Component} from 'react';

class Footer extends Component{

	render(){

		return(
			<div>
				<div class="d-flex py-4 bg-dark justify-content-around">
					<div class="p-2 bd-highlight">
						<a class="text-decoration-none text-white">Link</a>
					</div>
				  <div class="p-2 bd-highlight">
				  		<a class="text-decoration-none text-white">9504475768</a>
				  </div>
				  <div class="p-2 bd-highlight">
				  		<a class="text-decoration-none text-white">harshkmr991234@gmail.com</a>
				  </div>
				</div>
			</div>
		);
	}
}

export default Footer;