import React from 'react';
import ReactDOM from 'react-dom';
class ArrayList extends React.Component {
	constructor(props) {
		super(props);
		const numbers = this.props.arrayObject;
		/*Keys help React identify which items have changed, added,removed.*/
		this.listItems = numbers.map((number)=> 
			<li key={number.toString()}>{number}</li>
		);
	}
	
	render() {
		return (
			<div>
				<h1>Array of components are iterating through List</h1>
				<ul>{this.listItems}
				</ul>
			</div>
		);
	}
}

var arrayObject = [1,2,3,4,5,6,7,8,9,10];
/*need to pass data to component and use it with hlep props*/
ReactDOM.render(<ArrayList arrayObject={arrayObject} />, document.getElementById('arrayList'));