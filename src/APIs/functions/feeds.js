/**
 * Created by drunkengranite on 5/3/17.
 */
import axios from 'axios'
import Immutable from 'immutable'

const URL = "https://api.aggre.tv";

export const getBrowseFeed = (offset) => {
	const headers = {
		headers: {
			Offset: offset
		}
	};
	return axios.get(URL + "/feeds/browse", headers)
		.then((response) => {
			return Immutable.fromJS(response.data)
		})
		.catch((error) => {
			console.log(error)
		});

};

export const getRecommendedFeed = (username) => {


};

export const getGame = (offset, obj) => {
	const headers = {
		headers: {
			Offset: offset
		}
	};

	return axios.get(URL + "/feeds/games?game=" + encodeURI(obj.name), headers)
		.then((response) => {
			return Immutable.fromJS(response.data)
		})
		.catch((error) => {
			console.log(error)
			return []
		});
};


export const getGamesFeed = (offset) => {
	const headers = {
		headers: {
			Offset: offset
		}
	};
	return axios.get(URL + "/feeds/games", headers)
		.then((response) => {
			return Immutable.fromJS(response.data)
		})
		.catch((error) => {
			return Immutable.fromJS([])
		});

};