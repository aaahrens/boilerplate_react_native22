/**
 * Created by drunkengranite on 2/20/17.
 */

import axios from 'axios'
import Immutable from 'immutable'
import CookieHandler from './CookieHandler'

export const BASE_URL = "https://api.aggre.tv";

const tabs = require("./functions/tabs");
const feeds = require("./functions/feeds");
const user = require("./functions/user");


export const getRisingFeed = (username) => {


};


const base_url = "http://localhost:8080";
// || "https://api.aggre.tv"

export const startTwitchLogin = (code) => {
	return axios.post(BASE_URL+ '/auth/twitch', {
		Code: code,
		Token: CookieHandler.getSalt()
	})
		.then((resp) => {
			console.log("got the response kappa");
			console.dir(resp.data)
			return Immutable.fromJS(resp.data)
		})
		.catch((error) => {
			console.log(error);
			return Immutable.List()
		});
};


export const startYoutubeLogin = (code, state) => {
	axios.post("https://api.aggre.tv/auth/youtube", {
		Code: code,
		Token: CookieHandler.getSalt()
	})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
};


//I organized it like this for simplicity

const AggreHandler = {

	// authorization modules go in here
	startTwitchLogin: (code) => startTwitchLogin(code),
	startYoutubeLogin: (code, state) => startYoutubeLogin(code, state),
	getUser: () => user.getUser(),

	//	tabs  modules go here
	addContentToTab: (tab, stream) => tabs.addContentToTab(tab, stream),
	removeContentFromTab: (tab, stream) => tabs.removeContentFromTab(tab, stream),
	editTab: (tab, changes) => tabs.editTab(tab, changes),
	createTab: (name) => tabs.createTab(name),
	deleteTab: (name) => tabs.deleteTab(name),
	getUserTabs: (salt) => tabs.getTabs(salt),
	//	user modules go here

	//	streams modules goes here
	getBrowseFeed: (int) => feeds.getBrowseFeed(int),
	getGamesFeed: (offset) => feeds.getGamesFeed(offset),
	getGame: (name, offset) => feeds.getGame(name, offset),
	// user modules go in here

};

export default AggreHandler