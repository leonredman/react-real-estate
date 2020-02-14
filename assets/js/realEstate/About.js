import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}
	render() {
		return (
			<div className="about">
				<div className="about-container">
					<h2>
						{' '}
						Work With an Experienced <br />
						Real Estate Broker
					</h2>
					<h4>We are here to help you!</h4>
				</div>
				<div className="about-section">
					<div className="section-left">
						<img src="https://img1.wsimg.com/isteam/stock/4226/:/fm=f:4226" />
					</div>

					<div className="section-right">
						<h2>Our Core Values</h2>
						<p>
							We believe in dependability, integrity, honesty, and high
							experience. These core values are the foundation to help us
							provide our services to our clients with their satisfaction in
							mind.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
