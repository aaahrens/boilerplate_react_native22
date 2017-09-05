/**
 * Created by drunkengranite on 5/3/17.
 */

import CookieHandler from '../CookieHandler'
import Immutable from 'immutable'
import axios from 'axios'


export const getUser = () => {
	if (CookieHandler.getSalt() != "") {
		return axios.get("https://api.aggre.tv" + "/user/fetch", {
			headers: {
				Token: CookieHandler.getSalt()
			}
		}).then((response) => {
			console.log(response.data);
			return Immutable.fromJS(response.data)
		}).catch((error) => {
			console.log(error)
		})
	} else {
		return new Promise(function (resolve, reject) {

			setTimeout(function () {

			}, 1);
		});
	}
};
