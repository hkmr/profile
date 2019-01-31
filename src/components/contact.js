import React, { Component } from 'react';
import Card from './contactCard.js';
import logo from '../logo.svg';

class Contact extends Component{

	render(){

		/*Follow on:

		1. Github
		2. Facebook
		3. Instagram
		4. Hackerrank
		5. Hackerearth
		6. Leetcode
		*/

		return(

			<div class="container">
				<h1 class="h1 my-5 text-center text-uppercase font-weight-bold">Follow me</h1>
				<div class="row">
					<div class="col-sm">
						<Card name="Facebook"/>
					</div>
					<div class="col-sm">
						<Card name="Twitter"/>
					</div>
					<div class="col-sm">
						<Card name="Github"/>
					</div><div class="col-sm">
						<Card name="Hackerrank"/>
					</div><div class="col-sm">
						<Card name="Hackerearth"/>
					</div><div class="col-sm">
						<Card name="Leetcode"/>
					</div>
				</div>

			</div>

		);

	}

}

export default Contact;