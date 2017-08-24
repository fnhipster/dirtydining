import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import client from './client'

import reducers from '../reducers'

const middleware = applyMiddleware(thunk, client.middleware())

export default createStore(
  reducers,
  {}, // initial state
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools({ realtime: true })(middleware)
    : compose(middleware)
)

