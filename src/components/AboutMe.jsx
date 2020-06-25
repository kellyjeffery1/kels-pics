import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class AboutMe extends Component {
	render() {
		return (
			<div className="aboutMe-section">
				<Container fluid>
					<Row>
						<Col>
							<div className="about-text-conatiner1">
								<p>
									Front end developer looking to continue an exciting and challenging journey in the
									tech industry. Determined, disciplined and driving having been the 5x international
									open water champion of the Algarve and with 5+ years work experience across England
									and Australia. Self-taught and a self-starter with a years worth of personal
									projects focusing primarily on React.
								</p>
							</div>
						</Col>
						<Col>
							<div className="about-text-conatiner2">
								<p>
									An intensive coding school with an entrepreneurial focus. Worked in small tech
									teams, collaborating through Github, Trello and Figma. Exposed to the tech workflow
									with regular sprints, stand-ups and demos. Taught the following technologies:
									Javascript, Ruby, Ruby On Rails (framework), HTML5, CSS/sass, and Bootstrap. In the
									final three weeks, built two detailed web applications from start to finish and
									presented the final Minimum Viable Product in front of 300+ people at the Barbican
									Center.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AboutMe;
