import {LOAD_FEED, SHOW_LOADING} from "./home.constants";
import Immutable from 'immutable'

export const showLoading = () => {
	return {
		type: SHOW_LOADING
	}
};

export const loadFeed = (data) => {
	return {
		type: LOAD_FEED,
		payload: data
	}
};


export const fetchBrowse = () => {
	return (dispatch, getState, {AggreHandler}) => {

		dispatch(showLoading());

		AggreHandler.getBrowseFeed(0)

			.then((resp) => {
				dispatch(loadFeed(resp))
			})

			.catch((error) => {
				console.log(error)
				dispatch(loadFeed(Immutable.List()))
			})


	}
}