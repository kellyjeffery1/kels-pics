import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'reactstrap';

class Airbaby extends Component {
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
			<div className="airbaby-section">
				<Parallax
					bgImage="https://images.unsplash.com/photo-1497412159286-98933a0e327f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1919&q=80"
					strength={500}
				>
					<div style={{ height: 600 }}>
						<div className="airbaby-section">
							<Container fluid>
								<Row>
									<Col sm={6}>
										<div className="airbaby-container">
											<h2 className="airbaby-title">AIRBABY</h2>
											<p className="airbaby-paragraph">
												<p>
													AirBaby,A market place targeted at money savvy young parents who can
													buy and sell baby clothes built with Ruby on Rails, Active Record,
													Ajax, Map-box, Geocoding, and Cloudinary. Designed the front-end
													using Figma. Collaborated through Github and deployed using Heroku.
													On AirBaby they were able to rent clothes, and also put clothes up
													to rent. Presented in front of 40+ people at the bootcamp.
												</p>
											</p>
										</div>
									</Col>
									<Col sm={6}>
										<div className="airbaby-carousel">
											<Slider {...settings}>
												<div>
													<img
														className="airbaby-image"
														alt="something"
														src="./images/rentpage.jpg"
													/>
												</div>
												<div>
													<img
														className="airbaby-image"
														alt="something"
														src="./images/airbabypage.pjg.png"
													/>
												</div>
											</Slider>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
				</Parallax>
			</div>
		);
	}
}

export default Airbaby;
