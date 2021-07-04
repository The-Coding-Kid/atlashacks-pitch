import React from 'react';
import '../index.css';

const Steps = () => {
	return (
		<>
			<section id="about">
				<h2 class="section-headline">Why Fresh Choices</h2>
				<h3 class="line"></h3>
				<div class="row">
					<div class="one-of-two">
						<img src="assets/food.jpg" alt="" />
					</div>
					<div class="one-of-two">
						<div class="steps-container">
							<div class="circle">
								<p>1</p>
							</div>

							<h2>Teaches better eating habbits</h2>
							<p class="steps-description">
								Decades of studies have shown the need for nutritious meals amongst high schoolers,
								and poor nutrition leads to reduced concentration and poorer grades. With Fresh
								choices anyone can make better food choices.
							</p>
						</div>

						<div class="steps-container">
							<div class="circle">
								<p>2</p>
							</div>

							<h2>Easy to use</h2>
							<p class="steps-description">
								This app is really easy to use with 1 step! Scan your photo and wait, that counts as
								two but whatever. The app will call the backend a give us a star result. More than
								3.5 is a healthy food option. Higher the better!
							</p>
						</div>

						<div class="steps-container">
							<div class="circle">
								<p>3</p>
							</div>

							<h2>Built with state of the art technology</h2>
							<p class="steps-description">
								The app and the website is built with state of the art technology. Using react
								native for the app front end and flask for the backend, and with the help from
								google vision you will get the best results possible to help make food choices
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Steps;
