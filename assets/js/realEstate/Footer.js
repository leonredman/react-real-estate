import React, { Component } from 'react';

export default class Footer extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="home">
				<div className="container">This is a Router Test Footer</div>
			</div>
		);
	}
}

// add to top of realEstate.js
//import Footer from './Footer.js';.filter((item) => {

})


// add  to render method at bottom of page of realEstate.js
//	<Route exact path="/" component={Footer} />
