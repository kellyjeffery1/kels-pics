import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class AboutCard extends Component {
	render() {
		return (
			<div className="picture-section">
				<Container fluid>
					<Row>
						<Col sm={6}>
							<div>
								<img
									className="image1"
									alt="something"
									src="https://images.unsplash.com/photo-1453814235491-3cfac3999928?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
								/>
							</div>
						</Col>
						<Col sm={6}>
							<div>
								<img
									className="image2"
									alt="something"
									src="https://images.unsplash.com/photo-1534759926787-89fa60f35848?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={6}>
							<div>
								<img
									className="image1"
									alt="something"
									src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
								/>
							</div>
						</Col>
						<Col sm={6}>
							<div>
								<img
									className="image2"
									alt="something"
									src="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AboutCard;
