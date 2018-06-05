import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const getWindowWidth = () => window.width;

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: getWindowWidth() * 0.5,
    height: getWindowWidth() * 0.3,
  },
  loginWrapper: {
    backgroundColor: 'white',
    width: getWindowWidth() * 0.5,
  },
  regularLogin: {

  },
  facebookLogin: {

  },
});