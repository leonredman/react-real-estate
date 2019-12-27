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
			<section id="listings">
				<section className="search-area">
					<input type="text" name="search" />
				</section>
				<section className="sortby-area">
					<div className="results">390 results found</div>
					<div className="sort-options">
						<select name="sortby" className="sortby">
							<option value="price-asc">Highest Price</option>
							<option value="price-asc">Lowest Price</option>
						</select>
						<div className="view">
							<i className="fa fa-th-list" aria-hidden="true" />
							<i className="fa fa-th" aria-hidden="true" />
						</div>
					</div>
				</section>
				<section className="listings-results">
					<div className="listing">
						<div className="listing-img">
							<span className="address">23 Dexi Hills</span>
							<div className="details">
								<div className="col-md-3">
									<div className="user-img"> </div>
								</div>

								<div className="col-md-9">
									<div className="user-details">
										<span className="user-name">Nina Smith</span>
										<span className="post-date">05/05/2017</span>
									</div>
									<div className="listing-details">
										<div className="floor-space">
											<i className="fa fa-square-o" aria-hidden="true" />
											<span> 1000 ft&sup2;</span>
										</div>
										<div className="bedrooms">
											<i className="fa fa-bed" aria-hidden="true" />
											<span>3 bedrooms</span>
										</div>
									</div>

									<div className="view-btn">view listing</div>
								</div>
							</div>
						</div>

						<div className="bottom-info">
							<span>$1000 / month </span>
							<span>
								<i className="fa fa-map-maker" aria-hidden="true" /> Ridgwood,
								NY
							</span>
						</div>
					</div>
				</section>
				<section className="pagination">
					<ul className="pagination-nums">
						<li> Prev</li>
						<li> 1</li>
						<li> 2</li>
						<li> 3</li>
						<li> 4</li>
						<li> 5</li>
						<li> Next</li>
					</ul>
				</section>
			</section>
		);
	}
}