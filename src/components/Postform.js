import React, { Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        /*Warning: setState(...): Can only update a mounted or mounting component. 
        This usually means you called setState() on an unmounted component.*/
        // this.setState({
        // 	title: '',
        // 	body: ''
        // });
        this.state = {
        	title: '',
        	body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
    	this.setState({[event.target.name] : event.currentTarget.value});
    }
    onSubmit(event) {
    	event.preventDefault();
    	const post = {
	      title: this.state.title,
	      body: this.state.body
	    };
    	this.props.createPost(post);
    	// const post = {
    	// 	title: this.state.title,
    	// 	body: this.state.body
    	// }
    	// /*POST request should have method, header and stringify body*/
    	// fetch('https://jsonplaceholder.typicode.com/posts', {
    	// 	method: 'POST',
    	// 	headers: {
    	// 		'content-Type': 'application/json'
    	// 	},
    	// 	body: JSON.stringify(post)
    	// })
    	// .then(res => res.json())/*converting stringify data to JSON*/
    	// .then(data => console.log(data));
		
    }

    render() {
        return (
            <div>
            	<h1>Add Post</h1>
            	<form onSubmit={this.onSubmit}>
	            	<strong><label>Titile:</label></strong> <br />
	        		<input type="text" name="title" onChange={this.onChange} value={this.state.title}/><br />
	        		<strong><label>Body:</label></strong><br/>
	        		<textarea name="body" onChange={this.onChange} value={this.state.body}/> <br /> <br/>
	        		<button type="submit">Submit</button>
        		</form>
            </div>
        );
    }
}

PostForm.propTypes = {
	createPost: propTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
