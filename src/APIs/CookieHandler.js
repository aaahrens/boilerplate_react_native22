/**
 * Created by drunkengranite on 4/5/17.
 */
import Immutable from 'immutable'


const getSalt = () => {
	if (typeof window === "undefined") {
		return ""
	} else {
		return localStorage.getItem("Token")
	}

};

const saveSalt = (salt) => {
	if (typeof window === "undefined") {
		return "";
	} else {
		localStorage.setItem("Token", salt)
	}
};

const saveUser = (user) => {
	if(typeof window !== 'undefined'){
		localStorage.setItem("user", JSON.stringify(user.toJS()))
	}
}


const getUser = () => {
	if (typeof window !== 'undefined') {
		return Immutable.fromJS(JSON.parse(localStorage.getItem("user")))
	}else{
		return null;
	}
};

const CookieHandler = {
	getSalt: () => getSalt(),
	saveSalt: (salt) => saveSalt(salt),
	getUser: () => getUser(),
	saveUser: (user) => saveUser(user),
};

export default CookieHandler