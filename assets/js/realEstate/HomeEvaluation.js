import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HomeEvaluation extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}
	render() {
		return (
			<div className="home-eval">
				<div className="home-eval-container">
					<h2>
                    Have Your Home Evaluated  <br />
                    by a Talented Real Estate Broker
					</h2>
				</div>

				<div className="eval-form">
                    <h2>IN THE MARKET TO BUY OR SELL YOUR PROPERTY?</h2>
                    <form>
                    <label for="fname">First name:</label><br>
                        <input type="text" id="fname" name="fname" value="John"><br>
                        <label for="lname">Last name:</label><br>
                        <input type="text" id="lname" name="lname" value="Doe"><br><br>
                        <input type="submit" value="Submit">
                    </form>
			    </div>

			</div>
		);
	}
}
