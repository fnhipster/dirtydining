import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import reducers from '../reducers'

const middleware = applyMiddleware(thunk)

export default createStore(
  reducers,
  // preloadedState,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools({ realtime: true })(middleware)
    : compose(middleware)
)

