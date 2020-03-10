import ReduxThunk  from 'redux-thunk';
import { applyMiddleware,compose,createStore,Store } from 'redux';
import { state } from './reducers'

const a:any = window;

const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

export const store:Store<any>=createStore(
  state,
  enhancer
)