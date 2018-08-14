import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../modules'

export default (initialState, history) => {
  const middlewares = [ thunk, routerMiddleware(history) ]

  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
