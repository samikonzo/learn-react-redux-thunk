import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers.js'
import createSagaMiddleware from 'redux-saga'
import  { watherSaga}  from './sagas.js'

const sagaMiddleware = createSagaMiddleware()


let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watherSaga)



export default store
