import Constants from './constants.js'
import { userGetDataRun, userGetDataSuccess, userGetDataFail } from './actions'
import { put, call, takeEvery } from 'redux-saga/effects'




function fetchUser(id){
	return fetch(`user/data/${id}`)
		.then( res => res.json())
}

function* workerSaga(){
	try {
		yield put(userGetDataRun())
		const data = yield call( fetchUser, id )
		yield put(userGetDataSuccess(data))
	} catch(error) {
		yield put(userGetDataFail(error))
	}
}

export function* watherSaga(){
	yield takeEvery(Constants.USER_GET_DATA, workerSaga)
}
