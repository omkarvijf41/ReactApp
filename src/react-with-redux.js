
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts.js';
import PostForm from './components/Postform.js';
import {Provider} from 'react-redux'; /*React and Redux are sepearte pieces. react-redux 
is a glue redux is with react*/
// import {thunk} from 'redux-thunk';/*redux-thunk is a middleware for redux it will provide the 
// actions dispatch that will useful for service calls.*/
// import {createStore, applyMiddleware} from 'redux';
// /*createStore(rootReducer, [preloadedState], [enhancer]) enchancer means redux thirdparty extension*/
// const store = createStore(()=> [], {}, applyMiddleware()); 

import store from './store'

class ReactWithRedux extends React.Component  {
  
    constructor(props) {
        super(props);
        this.state = {
        	posts : []
        }
    }

   /* componentWillMount() {
    	fetch('https://jsonplaceholder.typicode.com/posts')
    	.then((res)=> res.json())
    	.then((data)=>{
    		this.setState({posts: data})
    	});
    }*/

    render() {
    	/*const itemsList = this.state.posts.length > 0 && this.state.posts.map(post=>{
    			if (post.id <= 2) {
    				return (
		    			<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					);
    			}
    	});*/
        return (
        	<Provider store={store}>
	        	<div>
	        		<h1>reactWithRedux1 Learning:</h1>
	        		<PostForm />
	        		<br />
	        		<Posts />
	        	</div> 
        	</Provider>
        );
    }
}


ReactDOM.render(<ReactWithRedux />, document.getElementById('reactWithRedux'));

