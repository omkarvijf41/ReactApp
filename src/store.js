import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';/*redux-thunk is a middleware for redux it will provide the 
actions dispatch that will useful for service calls.*/
import rootReducer  from './reducers';

const intialState = {};
const middleware = [thunk];
//const rootReducer = ()=> [];
/*createStore(rootReducer, [preloadedState], [enhancer]) enchancer means redux thirdparty extension*/
const store = createStore(
	rootReducer, 
	intialState, 
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && 	window.__REDUX_DEVTOOLS_EXTENSION__()
	)
); 
export default store;