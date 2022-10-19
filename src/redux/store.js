import {createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer/root.reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'data',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(logger, thunk))
const persistor = persistStore(store)

export default store
export {persistor}