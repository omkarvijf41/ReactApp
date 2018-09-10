import React from 'react';
import ReactDOM from 'react-dom';
class ReactLifeCycleMethods extends React.Component {
	/*LIFECYCLE 1*/
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	/*React life cycle hook. This is like attach() or onShow().*/
	/*LIFECYCLE 3*/
	componentDidMount() {
		this.timerId = setInterval(()=> this.tick(), 1000);
	}
	/*LIFECYCLE 4*/
	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		/*in-buit method of react state*/
		/*Don't modify the state using state property use the setState method for 
		updating*/
		this.setState({
			date: new Date()	
		});
	}
	/*LIFECYCLE 2*/
	render() {
		return (
			<h2>This includes React component lifecycle Methods
				{this.state.date.toLocaleString()}
			</h2>
		);
	}
}
/*React inserts the component into the DOM*/
ReactDOM.render(<ReactLifeCycleMethods />, document.getElementById('reactLifeCycle'));