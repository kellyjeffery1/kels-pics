import React from 'react';

function Header() {
	return (
		<header className="pannels">
			<div className="left-pannel" />
			<div className="right-pannel" />

			<div className="title">
				<h1>KE</h1>
				<h1 className="second-name">
					LLY
					<span className="full-stop" style={{ color: '#CA8DFB' }}>
						.
					</span>
				</h1>
			</div>
		</header>

		// <header className="header">
		// 	<div className="header-container">
		// 		<h1>Kel's Pics</h1>
		// 	</div>
		// </header>
	);
}
export default Header;
