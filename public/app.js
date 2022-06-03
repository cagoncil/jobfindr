'use strict';

// Prevent body scroll while full-screen navigation is open
document.querySelector('#nav').addEventListener('click', function () {
	document.querySelector('body').classList.toggle('fixedPos');
});

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h2',
		null,
		'This is JSX from app.js'
	),
	React.createElement(
		'p',
		null,
		'Hello'
	)
);

ReactDOM.render(template, document.querySelector('.second'));

var app = {
	title: 'Title',
	subtitle: 'This is the subtitle'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'h3',
		null,
		app.subtitle
	)
);

ReactDOM.render(templateTwo, document.querySelector('.third'));
