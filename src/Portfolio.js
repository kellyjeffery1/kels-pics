import React, { Component } from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioCarousel from './components/PortfolioCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Portfolio extends Component {
	render() {
		return (
			<div>
				<PortfolioHeader />
				<PortfolioCarousel />
			</div>
		);
	}
}

export default Portfolio;
