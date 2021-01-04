import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import HomeEvaluation from './HomeEvaluation.js';
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
					<Route exact path="/" component={Home} />
					<Route exact path="/realEstate.js" component={realEstate} />
					<Route exact path="/About.js" component={About} />
					<Route exact path="/HomeEvaluation.js" component={HomeEvaluation} />
				</div>
			</Router>
		);
	}
}
const app = document.getElementById('app');

ReactDOM.render(<App />, app);
