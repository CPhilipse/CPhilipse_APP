import {combineReducers} from 'redux';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
