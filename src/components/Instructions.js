import React from 'react';
import '../index.css';

const Instructions = () => {
	return (
		<>
			<section id="instructions">
				<div class="section-headline">How to try our App</div>
				<div class="line"></div>
				<div class="row">
					<div class="one-of-two">
						<h1>Step 1:</h1>
						<h3>
							First step is to do "npm i expo-cli" to download the Expo CLI. Download the source
							code and inside the client folder run "npm install".Start a virtualenv(pip install
							virtualenv) and do "virualenv -p python3 env" and then run "source env/bin/activate".
							Finally, inside the backend folder, run "pip install -r requirements.txt"
						</h3>
					</div>
					<div class="one-of-two">
						<h1>Step 2:</h1>
						<h3>
							Whenever you want you want to start the app run "expo start --no-dev --minify" in your
							client folder. Inside the backend and run python3 app.py while inside your virtualenv.
							Go into the .env file and change your server url to the uri it shows in your python
							console after starting the Flask server.
						</h3>
					</div>
					<div class="one-of-two">
						<h1>Step 3:</h1>
						<h3>
							Generate a service key from your google api cloud console for the google vision API
							and save it anywhere in your computer. Then, open your .bashrc(or .zshrc) and insert
							this line:"export GOOGLE_API_CREDENTIALS='/path/to/your/credentials/json'"". Finally,
							run source .bashrc(or .zshrc)
						</h3>
					</div>
					<div class="one-of-two">
						<h1>Step 4:</h1>
						<h3>
							You should get a QR code, scan that from your "Expo Go" app. This should open your
							app. Enjoy staying healthy!!!
						</h3>
					</div>
				</div>
			</section>
		</>
	);
};

export default Instructions;
