import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import realEstate from './realEstate.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route path="/realEstate" component={realEstate} />
					<Route path="/home.js" component={Home} />
				</div>
			</Router>
		);
	}
}
const app = document.getElementById('app');

ReactDOM.render(<App />, app);
