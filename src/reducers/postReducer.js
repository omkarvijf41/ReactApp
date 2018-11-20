import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
	items: [], /*Here items is the posts coming from action type GET*/
	item: {} /*Here item is the post coming from action type POST*/
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				state,/*...initialState*/
				items: action.payload
			};
		case NEW_POST:
			return {
				state,/*...initialState*/
				item : action.payload
			};
		default:
			return state;
	}
};

