import Navbar from './components/Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';
import './pageTransistions/slideTransistions.scss'

// import Card from './components/Card';
// import Like from './components/Like';
import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			prevDepth: this.getPathDepth(this.props.location),
			
		}
	}
	componentWillReceiveProps() {
		this.setState({ prevDepth: this.getPathDepth(this.props.location) });
		
	}
	
	getPathDepth(location) {
  		let pathArr = location.pathname.split("/");
  		pathArr = pathArr.filter(n => n !== "");
  		return pathArr.length;
	}
	
	render() {
		const { location } = this.props;
		const currentKey = location.pathname.split("/")[1] || "/";
		const timeout = { enter: 800, exit: 400 };
		return (
			<div>
			<TransitionGroup component='div' className="app">
				<Router>
					<div>
					 <Navbar />
							<CSSTransition key={currentKey} timeout={timeout} className='pageSlider' mountOnEnter={false} unmountOnExit={true}>
								<div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ?  "left": "right"}>
							<Switch location={location}>
								<Route path="/" exact component={Home} />
								<Route path="/About"  component={About} />
								<Route path="/Portfolio" component={Portfolio} />
								<Route path="/Contact" component={Contact} />
									</Switch>
									</div>
						</CSSTransition>
				 </div>
			 </Router>
		</TransitionGroup>
			</div>
		);
	}
}

export default App;
