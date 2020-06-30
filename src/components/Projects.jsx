import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

    class Projects extends Component {
        
        render() { 
            return (
                <div className='project-section'>
                    <Container fluid>
                    <h1 className="project-title">
						MORE
						<span className="full-stop" style={{ color: '#CA8DFB' }}>
							.
						</span>
					</h1>
                        <Row>
                            <Col sm={4}>
                                <div className="messageBoard-conatiner">
                                    <h3>Message board
                                        <span className="full-stop" style={{ color: '#CA8DFB' }}>. </span>
                                    </h3>
								    <p>
								     A React frontend app where users can upload blogs, read other users blogs and leave comments.
                                    Gained an insight into Reacts component based library, one-directional dataflow and additional add-ons such as React Router,
                                     Redux and Styled- Component.
									</p>
								</div> 
                            </Col>
                            <Col sm={4}>
                                <div className="meme-container">
                                    <h3>Meme Generator
                                        <span className="full-stop" style={{ color: '#CA8DFB' }}>. </span>
                                    </h3>
                                    <p>
                                        A React frontend app where users can upload blogs, read other users blogs and leave comments.
                                    Gained an insight into Reacts component based library, one-directional dataflow and additional add-ons such as React Router,
                                     Redux and Styled- Component.
									
									</p>
								</div>
                            </Col>
                            <Col sm={4}>
                                <div className="check-container">
                                    <h3>Checklist
                                        <span className="full-stop" style={{ color: '#CA8DFB' }}>. </span>
                                    </h3>
									<p>
									 A React frontend app where users can upload blogs, read other users blogs and leave comments.
                                    Gained an insight into Reacts component based library, one-directional dataflow and additional add-ons such as React Router,
                                     Redux and Styled- Component.
									</p>
								</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
    
    export default Projects;