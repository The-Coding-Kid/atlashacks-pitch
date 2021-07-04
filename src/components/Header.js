import React from 'react';
import '../index.css';

const App = () => {
	return (
		<>
			<header id="header">
				<nav>
					<p>Fresh Choices</p>
					<ul>
						<li>
							<a href="#about">Why Fresh Choices</a>
						</li>
						{/* <li><a href="#benefits">Why Learn Math</a></li> */}
						{/* <li><a href="#devlogs">How the Game was Made</a></li> */}
						<li>
							<a href="#download">Download Now</a>
						</li>
						<li>
							<a href="#instructions">User Manual</a>
						</li>
						<li>
							<a href="#team">Our Team</a>
						</li>
					</ul>
				</nav>

				<div class="headline-container">
					<h1>Fresh Choices</h1>
					<h2>Make healthier choices with Fresh Choices!</h2>
					<a href="#about">Learn More</a>
					<a href="#download">Download</a>
				</div>
			</header>
		</>
	);
};

export default App;
