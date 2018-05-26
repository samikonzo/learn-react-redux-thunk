import Constants from '../constants.js'

let userInit = {
	name : undefined,
	age : undefined, 
	auth : true,
	id: 'id_1', 
	loading: false,
	error: false,
}

let reducerUser = (state = userInit, action) => {
	let { type, payload } = action

	switch(type){
		case Constants.USER_GET_DATA: {
			return {
				...state,
				loading: true,
			}
		};

		case Constants.USER_GET_DATA_SUCCESS : {
			let { name, age } = payload

			return {
				...state,
				name, age,
				loading: false,
			}
		};

		case Constants.USER_GET_DATA_FAIL : {
			return {
				...state,
				error: payload,
				loading: false,
			}
		};

		case Constants.USER_CHANGE_ID : {
			return {
				...userInit,
				id: payload,
			}
		};


		default : return state
	}
}

export default reducerUser