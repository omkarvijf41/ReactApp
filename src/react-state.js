import React from 'react';
import ReactDOM from 'react-dom';
 
function ReactState()  {
	return (
		<div>
			<h1>React Component Updating Child DOM elements with help of react virtual DOM 
			instaed of loading whole component {new Date().toLocaleTimeString()}.</h1>
		</div>
	);
}
 
ReactDOM.render(<ReactState/>, document.getElementById('reactState'));

setInterval(ReactState, 1000);

