import Constants from '../constants.js'

let initImg = {
	img: undefined,
	loading: false,
	error: false,
	title: false,
}	

export default (state = initImg, action) => {
	let { type, payload } = action

	switch(type){
		case Constants.IMG_RELOAD : {
			return {
				...state,
				loading: true,
			}
		};

		case Constants.IMG_RELOAD_SUCCESS : {
			return {
				...state,
				loading: false,
				error: false,
				img: payload.url,
				title: payload.title,
			}
		};

		case Constants.IMG_RELOAD_FAIL : {
			return {
				...initImg,
				error: payload,
			}
		};


		default: return state
	}
} 