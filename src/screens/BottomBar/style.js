import { StyleSheet } from 'react-native'
import { WIDTH } from '../../helper/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'darkgrey',
  },
  imgContainer: {
    height: 28,
    width: 28,
    borderRadius: 50,
    resizeMode: "cover"
  },
  name: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontWeight: "200",
  },
  btn: {
    width: (WIDTH - 50) / 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  }
})