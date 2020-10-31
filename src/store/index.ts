import {compose, configureStore, createAction} from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Creates action creator function
// Actions switchDarkmode.type returns the action type string.
export const switchDarkmode = createAction('DARKMODE');

// User and Profile reducer. Profile has profile settings. User has user information.
// configureStore has DevTools Extension support by default, which createStore has not.
// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: rootReducer,
  devTools: composeEnhancers,
});

// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
//
// import Reactotron from '../../ReactotronConfig';
//
// const persistConfig = {
//     // https://github.com/rt2zz/redux-persist/issues/717 TODO CHECK: is this still an issue? Could be a debugger issue.
//     timeout: 10000,
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: [
//         'profileReducer',
//         'postsReducer',
//         'bookReducer',
//         'feedbackReducer',
//         'notificationReducer',
//     ],
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
//
// const store = createStore(
//     persistedReducer,
// );
//
// let persistor = persistStore(store);
//
// export {
//     store,
//     persistor,
//     AuthContext,
// };
