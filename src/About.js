import React, { Component } from 'react';
import AboutHeader from './components/AboutHeader';
import AboutCard from './components/AboutCard';
import AboutFooter from './components/AboutFooter';
import AboutMe from './components/AboutMe';
class About extends Component {
	render() {
		return (
			<div>
				<AboutHeader />
				<AboutCard />
				<AboutMe />
				<AboutFooter />
			</div>
		);
	}
}

export default About;
