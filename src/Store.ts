import ReduxThunk  from 'redux-thunk';
import { applyMiddleware,compose,createStore} from 'redux';
import { state } from './reducers'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const a:any = window;

const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage
}

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

const persistedReducer = persistReducer(persistConfig,state);

export const store = createStore(
    persistedReducer,
    enhancer
  )
export const persistor = persistStore(store);