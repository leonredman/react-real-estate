import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}
	render() {
		return (
			// <header>
			// <div> Logo </div>

			// <nav>
			// <a href="#">create ads</a>
			// <a href="#">About Us</a>
			// <a href="#">Log In</a>
			// <a href="#" className="register-btn">
			// Register
			// </a>/

			<header>
				<div> REALTY.COM </div>

				<nav>
					<a href="/">Home</a>
					<a href="/About.js">About</a>
					<a href="/realEstate.js">Listings</a>
					<a href="#">Home Evaluation</a>
					<a href="#">For Sellers</a>
					<a href="#">For Buyers</a>
					<a href="#">Contact Us</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
