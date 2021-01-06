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
					<h4> We’ll help you find A place you’ll love.</h4>
					<div className="searchcontainer">
						<div className="searchbar">
							<label>
								Location:
								<input className="locationsearch " type="text" name="name" />
							</label>
						</div>

						<div className="searchbar2">
							<label>
								Min Price:
								<input type="text" name="name" />
							</label>

							<label>
								Max Price:
								<input type="text" name="name" />
							</label>

							<input type="submit" value="Submit" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
