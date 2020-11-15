import {combineReducers} from 'redux';
import profileReducer from './profileReducer';
import languageSlice from './languageSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  language: languageSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
