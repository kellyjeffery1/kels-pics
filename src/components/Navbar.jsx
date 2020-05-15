import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		let linksMarkUp = this.props.links.map((link, index) => {
			return (
				<li className="menu__list-item">
					<a className="menu__link menu__link--active" href={link.link}>
						{link.label}
					</a>
				</li>
			);
		});
		return (
			<div className="container center">
				<nav className="menu">
					<div className="menu__right">
						<ul className="menu__list">{linksMarkUp}</ul>

						<button className="menu__search-button" />

						<form className="menu__search-form hide" method="POST">
							<input className="menu__search-input" placeholder="Type and hit enter" />
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
