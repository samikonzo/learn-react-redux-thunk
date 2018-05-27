import Constants from './constants.js'

let l = console.log



/*

// THUNK
	let userDataIsLoading = () => {
		return {
			type: Constants.USER_GET_DATA
		}
	}

	let userGetDataSuccess = (data) => {
		return {
			type: Constants.USER_GET_DATA_SUCCESS,
			payload: data
		}
	}

	let userGetDataFail = (error) => {
		return {
			type: Constants.USER_GET_DATA_FAIL,
			payload: error,
		}
	}

	export let userGetData = (id) => {
		return (dispatch) => {
			dispatch(userDataIsLoading())

			fetch(`user/data/${id}`, {method: 'GET'})
				.then( res => {
					if(!res.ok) throw res
					return res					
				})
				.then( res => res.json())
				.then( data => dispatch(userGetDataSuccess(data)) )
				.catch( 
					error => error.text().then(errorText =>  dispatch(userGetDataFail(errorText)) )
				)
		}
	}

	export let userChangeId = (id) => {
		return {
			type: Constants.USER_CHANGE_ID,
			payload: id
		}
	}


	let imgIsLoading = () => {
		return {
			type : Constants.IMG_RELOAD
		}
	}

	let imgReloadSuccess = (data) => {
		return {
			type: Constants.IMG_RELOAD_SUCCESS,
			payload: data
		}
	}

	let imgReloadFail = (error) => {
		return{
			type: Constants.IMG_RELOAD_FAIL,
			payload: error
		}
	}

	export let imgReload = () => {
		return (dispatch) => {
			dispatch( imgIsLoading() )

			fetch('img-load', {method: 'GET'})
				.then(res => {
					if( !res.ok ) throw res
					return res.json()	
				})
				.then( data => dispatch(imgReloadSuccess(data)))
				.catch( error => {
					error.text && error.text().then(errorText => dispatch(imgReloadFail(errorText)))
					l(error)
				})

		}
	}

*/


// SAGA

export let userGetDataRun = () => {
	return {
		type: Constants.USER_GET_DATA
	}
}


export let userGetDataSuccess = (data) => {
	return {
		type: Constants.USER_GET_DATA_SUCCESS,
		payload: data
	}
}

export let  userGetDataFail = (error) => {
	return {
		type: Constants.USER_GET_DATA_FAIL,
		payload: error,
	}
}

export let  userChangeId = (id) => {
	return {
		type: Constants.USER_CHANGE_ID,
		payload: id
	}
}


let action = {
	userGetDataRun,
	userGetDataSuccess,
	userGetDataFail,
	userChangeId,
}

export default action