import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger))
}
