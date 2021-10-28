import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import { reducers } from './reducers'

const middleware = [reduxThunk]

//DevTools will only be available for development
const devtools = process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)

const store = createStore(reducers, devtools)

export default store