import { combineReducers } from 'redux'
import reducerUser from './reducers/reducerUser.js'

let l = console.log


let rootReducer = combineReducers({
	user: reducerUser,
})

export default rootReducer