import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Card from './components/Card';

class App extends Component {
	render() {
		let links = [
			{ label: 'Home', link: '#home' },
			{ label: 'about', link: '#about' },
			{ label: 'portfolio', link: '#portfolio' },
			{ label: 'contact', link: '#contact' }
		];
		return (
			<div>
				<Navbar links={links} />
				<Header />
				<Card
					contact={{
						imageUrl:
							'https://images.unsplash.com/photo-1562887284-8ba6b7c90fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80',
						name: 'Kelly Jeffery',
						email: 'kellyjeffery1@hotmail.com',
						number: '07391023624'
					}}
				/>
			</div>
		);
	}
}

export default App;
