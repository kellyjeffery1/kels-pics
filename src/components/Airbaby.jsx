import React, { Component } from 'react';
import { Parallax } from 'react-parallax'
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
            <div className='airbaby-section'>
                <Parallax  bgImage="https://images.unsplash.com/photo-1546299138-b9760c08bb3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80">
                    <div style={{ height: 600}}>
                       <div className="bookmark-section">
				            <Container fluid>
                                <Row>
                                    <Col sm={6}>
							            <div className="bookmark-container">
							            	<h2 className="bookmark-title">BOOKMARK</h2>
							            	<p className="bookmark-paragraph">
									            Bookmark, an app where you find recommendations and opinions from the people
									            you trust. The app built with Ruby on Rails,HTML, SCSS, Ajax, Active Record,
									            JavaScript, Cloudinary focused>on movie recommendations but can grow to include
									            other media types. Presented in front of 200+ people at the<br /> Barbican
									            Center.
								            </p>
								            <a target="blank" href="http://www.bkmthis.com/">
									            Go to the app.
								            </a>
							            </div>
						            </Col>
						            <Col sm={6}>
							            <div className="carousel">
								            <Slider {...settings}>
								            	<div>
									            	<img
										            	className="image"
										            	alt="something"
											            src="./images/pic1.jpg"
										            />
									            </div>
									            <div>
										        <img
											        className="image"
											        alt="something"
											        src="./images/pic4.jpg"
										        />
									            </div>
									            <div>
										            <img
											            className="image"
											            alt="something"
											            src="./images/pic.jpg"
										            />
									            </div>
									            <div>
										            <img
										            	className="image"
											            alt="something"
											            src="./images/pic4.jpg"
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
            
        )
    }
}
 
export default Airbaby;