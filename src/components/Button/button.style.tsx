import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, metrics } from '../../themes';

interface Styles {
  button: TextStyle;
  buttonText: TextStyle;
	activityIndicator: ViewStyle;
	activeActivityIndicator: ViewStyle;
}

export const dark_bg = { backgroundColor: colors.black };
export const dark = { color: colors.white };
export const light_bg = { backgroundColor: colors.white };
export const light = { backgroundColor: colors.black };

export const styles = StyleSheet.create<Styles>({
  button: {
    height: 45,
    borderColor: colors.VEZPurple,
    borderWidth: 2,
    justifyContent: 'center',
    width: metrics.screenWidth - 125,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 32,
    backgroundColor: colors.trueBlack,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  activityIndicator: {
    alignSelf: 'flex-end',
    right: 20,
    position: 'absolute',
    zIndex: 88,
    // backgroundColor:'white',
  },
  activeActivityIndicator: {
    top: 7,
  },
});
