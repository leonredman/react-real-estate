import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}
	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<select
						name="neighbourhood"
						className="filters neighbourhood"
						onChange={this.props.change}
					>
						<option value="Ridgewood">Ridgewood</option>
						<option value="Miami">Miami</option>
					</select>
					<select
						name="housetype"
						className="filters housetype"
						onChange={this.props.change}
					>
						<option>Ranch</option>
					</select>
					<input type="text" name="max-price" className="max-price" />
					<select
						name="bedrooms"
						className="filters bedrooms"
						onChange={this.props.change}
					>
						<option>2 BR</option>
					</select>

					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min-price"
							className="min-price"
							onChange={this.props.change}
						/>
						<input
							type="text"
							name="max-price"
							className="max-price"
							onChange={this.props.change}
						/>
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min-floor-space"
							className="min-floor-space"
							onChange={this.props.change}
						/>
						<input
							type="text"
							name="max-floor-space"
							className="max-floor-space"
							onChange={this.props.change}
						/>
					</div>
					<div className="filters extras">
						<span className="title" />
						<label htmlFor="extras">
							<span>Elevators</span>
							<input
								name="extras"
								value="elevator"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extas">
							<span>Swimming Pool</span>
							<input
								name="extras"
								value="swimming-pool"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extas">
							<span>Finished Basement</span>
							<input
								name="extras"
								value="finished basement"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
						<label htmlFor="extas">
							<span>Gym</span>
							<input
								name="extras"
								value="gym"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}
