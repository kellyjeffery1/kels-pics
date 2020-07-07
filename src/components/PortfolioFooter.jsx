import React, { Component } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom';

class PortfolioFooter extends Component {
	render() {
		return (
			<footer className="footer">
				<ScrollButton />
				<Link to="/Contact">
					<ul className="contact-ul">
						<li className="contact-li">
							<span />
							<span />
							<span />
							<span />
							<span className="fa fa-copyright" />
						</li>
						<li className="contact-li">
							<a target="blank" href="https://github.com/kellyjeffery1">
								<span />
								<span />
								<span />
								<span />
								<span className="fa fa-github" />
							</a>
						</li>
					</ul>
				</Link>
			</footer>
		);
	}
}

export default PortfolioFooter;
