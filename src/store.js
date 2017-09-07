
import {applyMiddleware, createStore} from "redux";
import allReducers from './reducers'
import thunk from 'redux-thunk';
import AggreHandler from './APIs/AggreHandler'

const middleware = applyMiddleware(
	thunk.withExtraArgument({AggreHandler}),
	// logger
);

export const store = createStore(allReducers, middleware);
