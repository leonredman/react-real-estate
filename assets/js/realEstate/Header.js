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
				<div> Realty.com </div>

				<nav>
					<a href="#">Home</a>
					<a href="#">About Us</a>
					<a href="#">Listings</a>
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
