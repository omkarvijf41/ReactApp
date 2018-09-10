import React from 'react';
import ReactDOM from 'react-dom';

function FunctionComponentWithProps(props) {
	return (
		<h1>functional Compoent With {props.customproperty}
		</h1>
	);	
}
/*To custom component or user-defined component we are passing custom attribute as props*/
ReactDOM.render(<FunctionComponentWithProps customproperty="customAttributePassingToPropsObjAsParameter"/>, document.getElementById('functionComponent'));