import HeaderReducer from './containers/header/header.reducer'
import {
	StackNav
} from './routes'

import {combineReducers} from "redux";

const initialState = StackNav.router.getStateForAction(StackNav.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {

	const nextState = StackNav.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

const allReducer = combineReducers({
	nav: navReducer,



});


export default allReducer