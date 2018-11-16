import React, { Component } from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux'; /*connect will connectS the components redux store 
provided by provider*/
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
	componentWillMount() {
		//this.omkar();
		this.props.fetchPosts();
		
	}
   		// async omkar () {
   		// 	await this.props.fetchPosts();
   		// }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     	posts: [],
    //     	error: false
    //     }
    // }

 //    componentDidMount() {
	// 	How can I make an AJAX call?
	// 	You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, 
	// 	and the browser built-in window.fetch.
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 	.then((response)=> response.json())
	// 	.then((data)=>{
	// 		this.setState({posts: data});
	// 	});	
	// }

    render() {
    	const postItems = this.props.posts && this.props.posts.length > 0 && this.props.posts.map(post=>{
			if (post.id <= 3) {
				return (
	    			<li key={post.id}>
	    			    <h3>{post.title}</h3>
						<p>{post.body}</p>
					</li>
				);
			}
    	});
        return (
            <div>
            	<h1>Posts</h1>
            	{postItems}
            </div>
        );
    }
}

Posts.propTypes = {
	fetchPosts: propTypes.func.isRequired,
	posts: propTypes.array.isRequired
};

const mapStateToProps = state => ({
	posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts); 
{/*two () here. first () has serviceCall fetchPosts and second () has component eg:Posts*/} 