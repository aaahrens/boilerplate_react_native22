import {handleActions} from 'redux-actions'
import Immutable from 'immutable'
import {LOAD_FEED, SHOW_LOADING} from "./home.constants";

const initialState = {
	loading: false,
	browse: Immutable.List()
};



const HomeReducer = handleActions({

	[LOAD_FEED]: (state, action) => {
		return {
			...state,
			browse: action.payload,
			loading: false
		}
	},
	[SHOW_LOADING]: (state, action ) =>{

		return {
			...state,
			loading: true
		}
	}



}, initialState);



export default HomeReducer;