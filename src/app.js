// Prevent body scroll while full-screen navigation is open
document.querySelector('#nav').addEventListener('click', () => {
	document.querySelector('body').classList.toggle('fixedPos')
})


// JSX - JavaScript XML
var template = (
	<div>
		<h2>This is JSX from app.js</h2>
		<p>Hello</p>
	</div>
);

ReactDOM.render(template, document.querySelector('.second'));

var app = {
	title: 'Title',
	subtitle: 'This is the subtitle'
};

var templateTwo = (
	<div>
		<h1>{app.title}</h1>
		<h3>{app.subtitle}</h3>
	</div>
);

ReactDOM.render(templateTwo, document.querySelector('.third'));

