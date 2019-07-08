import {createStore, combineReducers} from 'redux'
// import promiseMiddleware from 'redux-promise-middleware'

import authReducer from './reducers/authReducer'
import favsReducer from './reducers/favsReducer'

const store = createStore(
    combineReducers({authReducer, favsReducer})
)


export default store;