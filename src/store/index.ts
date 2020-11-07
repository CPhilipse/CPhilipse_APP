import {compose, configureStore, createAction} from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers';

// Creates action creator function
// Actions switchDarkmode.type returns the action type string.
export const switchDarkmode = createAction('DARKMODE');

// Flipper is only available in DEV mode.
const middleware = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['profileReducer'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// User and Profile reducer. Profile has profile settings. User has user information.
// configureStore has DevTools Extension support by default, which createStore has not.
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  devTools: composeEnhancers,
  middleware,
});

// let persistor = persistStore(store);

export {
  store,
  // persistor
};
