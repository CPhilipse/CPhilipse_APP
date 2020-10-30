import {colors} from '../themes';

export const color = (darkmode: boolean) =>
  darkmode ? {color: colors.white} : {color: colors.black};

export const bgcolor = (darkmode: boolean) =>
  darkmode ? {backgroundColor: colors.black} : {backgroundColor: colors.white};

export const brcolor = (darkmode: boolean) =>
  darkmode ? {borderColor: colors.white} : {borderColor: colors.black};
