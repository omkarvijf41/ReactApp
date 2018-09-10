import React from 'react';
import ReactDOM from 'react-dom';

class HandlingEvents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true, 
					  value: ''
					 };
		this.toggleSwitch = this.toggleSwitch.bind(this);
		this.inputValueEvent = this.inputValueEvent.bind(this);
	}

	/*Hadndling Event*/
	toggleSwitch() {
		this.setState(()  => ({
			isToggleOn : !this.state.isToggleOn
		}));
	}

	inputValueEvent(event) {
		/*event which contains all information(ex:event.currentTarget.value) 
		is synthetic event*/
		this.setState( {
			value : event.target.value
		});	
	}

	render() {
		return (
			/*All bindings are JSX bindings {} syntax for all html bindings */
			/*All property names are like Jquery onClick,OnInput,Onchange*/
			<div>
				<h1>Handling Events with button click,input and change</h1>
				<button onClick={this.toggleSwitch}>
				{this.state.isToggleOn ? 'ON' : 'OFF'} 
				</button>
				<div>
					<input onInput={this.inputValueEvent} 
						   value={this.state.value}/>
					{this.state.value}
				</div>
			</div>
		);
	}

}

ReactDOM.render(<HandlingEvents/>, document.getElementById('handlingEvents'));