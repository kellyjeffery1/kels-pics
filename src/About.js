import React, { Component } from 'react';
import AboutHeader from './components/AboutHeader';
import AboutCard from './components/AboutCard';
class About extends Component {
	render() {
		return (
			<div>
				<AboutHeader />
				<AboutCard />
			</div>
		);
	}
}

export default About;
