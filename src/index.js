import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Steps from './components/Steps';
import Benefits from './components/Benefits.jsx';
import Download from './components/Download';
import Instructions from './components/Instructions';
import Team from './components/Team';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Steps />
		<Benefits />
		<Download />
		<Instructions />
		<Team />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
