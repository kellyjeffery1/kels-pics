import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class PortfolioCarousel extends Component {
	render() {
		const settings = {
			infinite: true,
			fade: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			className: 'slides'
		};
		return (
			<div className="carousel-section">
				<div className="carousel">
					<Slider {...settings}>
						<div>
							<img src="https://images.unsplash.com/photo-1493492473127-f5b4cafeb0b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" />
						</div>
						<div>
							<img src="https://images.unsplash.com/photo-1470940383688-5eae6a3d940c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1557&q=80" />
						</div>
						<div>
							<img src="https://images.unsplash.com/photo-1495044245703-b07f266e47b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
						</div>
						<div>
							<img src="https://images.unsplash.com/photo-1519147540699-2c85a1d4ba74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
						</div>
					</Slider>
				</div>

				<div className="bookmark-container">
					<h2>BOOKMARK</h2>
					<p />
				</div>
			</div>
		);
	}
}

export default PortfolioCarousel;
