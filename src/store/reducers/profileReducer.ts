import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkmode: true,
  favoriteColor: '#FFFFFF', // Use this color to customize the user profile. Bg to this color e.g.
  splashscreen: true,
};

/** Returns a reducer slice and the actions, all in one place.
 * https://redux-toolkit.js.org/tutorials/basic-tutorial
 * */
const profileReducer = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    switchDarkmode(state, action) {
      state.darkmode = action.payload;
    },
    setSplashscreen(state, action) {
      state.splashscreen = action.payload;
    },
  },
});

/** Redux community code convention called the "ducks".
 * it suggests that you should put all your action creators and reducers in one file,
 * do named exports of the action creators, and a default export of the reducer function.
 * https://redux-toolkit.js.org/tutorials/intermediate-tutorial
 * */
export const {switchDarkmode, setSplashscreen} = profileReducer.actions;

export default profileReducer.reducer;
