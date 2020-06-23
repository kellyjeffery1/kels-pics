import React, { Component } from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioCarosel from './components/PortfolioCarosel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Portfolio extends Component {
	render() {
		return (
			<div>
				<PortfolioHeader />
				<PortfolioCarosel />

			</div>
		);
	}
}

export default Portfolio;
