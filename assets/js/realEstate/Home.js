import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}
	render() {
		return (
			<div className="home">
				<div className="home-container">
					<h1> REIMAGINED HOME </h1>
					<h4> We’ll help you find a place you’ll love.</h4>
				</div>
			</div>
		);
	}
}
