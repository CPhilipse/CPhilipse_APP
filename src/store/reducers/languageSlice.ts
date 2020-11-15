import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};

/** Returns a reducer slice and the actions, all in one place.
 * https://redux-toolkit.js.org/tutorials/basic-tutorial
 * */
// TODO: Use constants here for 'en' and 'nl', while bypassing the cycle warning.
const languageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    setLanguage(state, action) {
      if (action.payload === 'en') {
        state.language = 'en';
      } else if (action.payload === 'nl') {
        state.language = 'nl';
      } else {
        state.language = 'en';
      }
    },
  },
});

/** Redux community code convention called the "ducks".
 * it suggests that you should put all your action creators and reducers in one file,
 * do named exports of the action creators, and a default export of the reducer function.
 * https://redux-toolkit.js.org/tutorials/intermediate-tutorial
 * */
export const {setLanguage} = languageSlice.actions;

export default languageSlice.reducer;
