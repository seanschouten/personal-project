import {createStore, combineReducers} from 'redux'
// import promiseMiddleware from 'redux-promise-middleware'

import authReducer from './reducers/authReducer'

const store = createStore(
    combineReducers({authReducer})
)


export default store;