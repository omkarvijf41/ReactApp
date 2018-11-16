/*Here is the place we will combine all the reducers*/

import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
	posts: postReducer
});