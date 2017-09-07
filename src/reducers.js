import {
	StackNav
} from './routes'

import {combineReducers} from "redux";
import HomeReducer from './containers/home/home.reducer'
const initialState = StackNav.router.getStateForAction(StackNav.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {

	const nextState = StackNav.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};


//here we show in the page reducers also keepo

const allReducer = combineReducers({
	nav: navReducer,
	home: HomeReducer,

});


export default allReducer