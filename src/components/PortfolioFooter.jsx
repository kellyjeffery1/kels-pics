import React, { Component } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom';

class PortfolioFooter extends Component {
	render() {
		return (
			<footer className="footer">
				<ScrollButton />
				<Link to="/Contact">
					<button className="contact-button">
                           contact
					</button>
				</Link>
			</footer>
		);
	}
}

export default PortfolioFooter;
