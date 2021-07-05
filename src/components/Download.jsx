import React from 'react';
import '../index.css';

const Download = () => {
	return (
		<>
			<section id="download">
				<div class="section-headline">Download Now!</div>
				<div class="line"></div>
				<a href="https://github.com/The-Coding-Kid/atlashacks-app">Download Client(React Native)</a>
				<a href="https://github.com/The-Coding-Kid/atlashacks-backend">Download Backend(Flask)</a>
				<a href="http://192.168.86.27:5000/">
					Try our web version of our app(make sure to try the app version though!!! :) )
				</a>
			</section>
		</>
	);
};

export default Download;
