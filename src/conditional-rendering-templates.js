import React from 'react';
import ReactDOM from 'react-dom';

var ConditionalRenderingTemplates = React.createClass({
	
	// constructor(props) {
	// 	super(props);
	// 	const isconditionalRender = props.isconditionalRender ? props.isconditionalRender : false;
	// }

	// render() {
	// 	return (
	// 		<div>This is {isconditionalRender}</div>
	//     );
	// }
	constructor: function(props) {
	    // super(props);
	    // this.handleLoginClick = this.handleLoginClick.bind(this);
	    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
	    // this.state = {isLoggedIn: false};
	  },

	  handleLoginClick: function() {
	    this.setState({isLoggedIn: true});
	  },

	  handleLogoutClick: function() {
	    this.setState({isLoggedIn: false});
	  },

	  render: function () {
	    const isLoggedIn = this.state.isLoggedIn;

	    let button = null;
	    if (isLoggedIn) {
	      button = <LogoutButton onClick={this.handleLogoutClick} />;
	    } else {
	      button = <LoginButton onClick={this.handleLoginClick} />;
	    }

	    return (
	      <div>
	        <Greeting isLoggedIn={isLoggedIn} />
	        {button}
	      </div>
	    );
	  }
});
// function LoginButton(props) {
// 	  return (
// 	    <button onClick={props.onClick}>
// 	      Login
// 	    </button>
// 	  );
// 	}

// 	function LogoutButton(props) {
// 	  return (
// 	    <button onClick={props.onClick}>
// 	      Logout
// 	    </button>
// 	  );
// 	}
// 	function Greeting(props) {
// 	  const isLoggedIn = props.isLoggedIn;
// 	  if (isLoggedIn) {
// 	    return <UserGreeting />;
// 	  }
// 	  return <GuestGreeting />;
// 	}

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );
ReactDOM.render(<ConditionalRenderingTemplates/>, 
document.getElementById('conditionalRenderingTemplates'));