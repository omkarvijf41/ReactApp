import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';
import axios from 'axios';
class ReactForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userName: '',
						count: 0 
					 };
		this.userNameUpdated = this.userNameUpdated.bind(this);
		this.postFromData = this.postFromData.bind(this);
		this.handleInputRef = this.handleInputRef.bind(this);
		this.buttonClicked = this.buttonClicked.bind(this);
		this.inputFocus = '';
		this.props = props;
	}
	componentDidMount() {
		/*How can I make an AJAX call?
		You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, 
		and the browser built-in window.fetch.*/
		this.data = this.serviceData();
	}
	async serviceData() {
		/*Fetch service call*/
		return await fetch('https://randomuser.me/api/').then(
			(response)=>{
				this.setState({userData: response && response.json()});
			}, 
			(error)=> {
				this.setState({error: true});
			}
		);
		/*JQuery GET service call*/
		// return await $.getJSON('https://randomuser.me/api/').then(
		// 	(response)=>{
		// 		this.setState({userData: response});
		// 	}, 
		// 	(error)=> {
		// 		this.setState({error: true});
		// 	}
		// );
	}
	userNameUpdated(event) {
		this.setState({
			userName: event.target.value
		});
	}
	buttonClicked(event) {
		return this.setState({
			count: Number(event.target.value) + 1
		});
	}
	postFromData(event) {
		/*fetch('http://localhost:8080/stubs/userData', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    firstParam: 'yourValue',
		    secondParam: 'yourOtherValue',
		  })
		});
		*/
		/*axios.post('http://localhost:8080/stubs/userData', {
		    firstName: 'Fred',
		    lastName: 'Flintstone'
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
	    });*/
	}
   handleInputRef() {
   	this.inputFocus.focus();
   }
	render() {
		return (
			<form onSubmit={this.postFromData}>
				<label>UserName:
					<input type="text" 
						value={this.state.userName} 
						onChange={this.userNameUpdated}
						ref={(input) => { this.inputFocus = input; }}
						/*document.getElementById() or targeting element using Jquery is 
						avioded by using ref attribute*/
						color //color defaultProp is undefined so it will set to true
					/> 
				</label>
				<input 
					type="submit" 
					onClick={this.handleInputRef}
					color="yellow" /*overriding the defaultProps.color here*/
				/>
				<button 
					onClick={this.buttonClicked}
					value={this.state.count}>
					CountIncrement:{this.state.count}
				</button>
			</form>
		);
	}
} 
ReactDOM.render(<ReactForms color='red' name="ReactFormsNameSetting"/>, document.getElementById('reactForms'));

// defaultProps::::::::
// can be defined as a property on the component class itself, to set the default props for the class. 
//This is used for undefined props, but not for null props.
ReactForms.defaultProps = {
	color : 'red',
	name : 'ReactFormsNameSettingForDebuggingPurposesDuringProductionBuilds'
}
