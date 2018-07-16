import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import Routes from './routes'

// Pick up any initial state sent by the server
const initialState = window.__REDUX_STATE__
const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))

syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Routes store={store} />
  </Provider>
), document.getElementById('root'))