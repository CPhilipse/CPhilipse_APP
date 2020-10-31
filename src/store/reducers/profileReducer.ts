import {createReducer} from '@reduxjs/toolkit';
import {switchDarkmode} from '../index';

const initialState = {
  darkmode: true,
  isLoggedIn: false,
  image: '',
  favoriteColor: '#FFFFFF', // Use this color to customize the user profile. Bg to this color e.g.
  birthday: null,
};

// @ts-ignore - computed properties (value of variable as key)
const profileReducer = createReducer(initialState, {
  [switchDarkmode.type]: (state) => !state.darkmode,
});

// const profileReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case switchDarkmode.type:
//       return {
//         ...state,
//         darkmode: !state.darkmode, // or action.payload
//       };
//     default:
//       return state;
//   }
// };

export default profileReducer;
