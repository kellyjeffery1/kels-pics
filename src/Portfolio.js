import React, { Component } from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioCarousel from './components/PortfolioCarousel';
import PortfolioFooter from './components/PortfolioFooter';
import Airbaby from './components/Airbaby';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Portfolio extends Component {
	render() {
		return (
			<div className='page'>
				<PortfolioHeader />
				<PortfolioCarousel />
				<Airbaby/>
					<PortfolioFooter />
			</div>
		);
	}
}

export default Portfolio;
