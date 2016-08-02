/**
 * Created by Bogdan on 8/2/2016.
 */
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk,logger)
  )
  return store
}