import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const getWindowWidth = () => window.width;
export const getWindowHeight = () => window.height;

export default StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },
  input: {
    width: getWindowWidth() * 0.7,
    height: 40,
  },
  searchItemsWrapper: {
    height: getWindowHeight() - 150,
  },
  itemTitle: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    fontSize: 18,
  },
});