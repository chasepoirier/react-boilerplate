import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './ducks'

const middleware = applyMiddleware(thunk, logger)
const rootReducer = combineReducers(reducers)

export default createStore(rootReducer, composeWithDevTools(middleware))
