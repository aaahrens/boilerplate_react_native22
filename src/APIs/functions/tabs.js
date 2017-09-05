/**
 * Created by drunkengranite on 5/3/17.
 */
import axios from 'axios'
import {BASE_URL} from '../AggreHandler'
import Immutable from 'immutable'
import CookieHandler from '../CookieHandler'


const base_url = "http://localhost:8080";

export const createTab = (tabName) => {

	if (CookieHandler.getSalt() !== "") {
		console.dir("creating tab of name " + tabName);
		axios.post("https://api.aggre.tv/tabs/create", {
			Token: CookieHandler.getSalt(),
			TabName: tabName,
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})

	} else {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {

			}, 1);
		});
	}
};

export const deleteTab = (tabName) => {
	if (CookieHandler.getSalt() !== "") {
		axios.post("https://api.aggre.tv/tabs/remove", {
			Token: CookieHandler.getSalt(),
			TabName: tabName,
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	} else {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {

			}, 1);
		});
	}
};


export const addContentToTab = (tabName, stream) => {
	if (CookieHandler.getSalt() !== "") {
		axios.post("https://api.aggre.tv/tabs/content/add", {
			Token: CookieHandler.getSalt(),
			TabName: tabName,
			Stream: stream,
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})

	} else {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
			}, 1);
		});
	}
};

export const removeContentFromTab = (tabName, stream) => {
	console.log("removing");
	if (CookieHandler.getSalt() !== "") {
		axios.post("https://api.aggre.tv/tabs/content/delete", {
			Token: CookieHandler.getSalt(),
			TabName: tabName,
			Stream: stream,
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})

	} else {
		return new Promise(function (resolve, reject) {

			setTimeout(() => {
			},
				1);
		});
	}
};


export const editTab = (tab, changes) => {
	axios.post(BASE_URL + "/tabs/edit", {
		ID: localStorage.getItem("userID"),
		TabName: tab.get('Name'),
		Image: changes.image,
		NewName: changes.name,
	})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
};


export const getTabs = (salt) => {

		return axios.get(BASE_URL + "/tabs/fetch", {
			headers: {
				Token: salt
			}
		}).then((response) => {
			return Immutable.fromJS(response.data)

		}).catch((error) => {
			console.log(error)
		})
};
