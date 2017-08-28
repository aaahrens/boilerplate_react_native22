import {handleActions} from 'redux-actions'


const initialState = {
	test: "one"
};



const HeaderReducer = handleActions({

	["ONE"]: (state, action) => {
		return {
			...state,
		}
	},


}, initialState);



export default HeaderReducer;