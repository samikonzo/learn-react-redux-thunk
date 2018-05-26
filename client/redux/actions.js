import Constants from './constants.js'

let l = console.log

let actions = {
	userGetData(id){
		l('userGetData')

		return {
			type: Constants.USER_GET_DATA,
			payload: id
		}
	},

	userGetDataSuccess(data){
		l('userGetDataSuccess')
		l(data)

		return {
			type: Constants.USER_GET_DATA_SUCCESS,
			payload: data
		}
	},

	userGetDataFail(error){
		l('userGetDataFail')
		//l(error)

		return {
			type: Constants.USER_GET_DATA_FAIL,
			payload: error,
		}
	},

	userChangeId(id){
		return {
			type: Constants.USER_CHANGE_ID,
			payload: id,
		}
	}
}

export default actions