import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Counter } from './Counter'
import Layout from './Layout'

export default function (props = {}) {
  let history = browserHistory

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store)
  }

  return (
    <Router history={history}>
      <Route path='/' component={Layout} >
        <IndexRoute component={Counter} />
        <Route path='*' component={Counter} />
      </Route>
    </Router>
  )
}