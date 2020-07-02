import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 55 : 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinDisplay: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 3,
  },
  coinInner: {
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  coin: {
    width: 20,
    height: 20,
    marginVertical: 5,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  coinText: {
    fontFamily: 'NunitoSans-ExtraBold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Piedra-Regular',
  },
  flag: {
    width: 35,
    height: 30,
    resizeMode: 'contain',
  },
  gradient: {
    width: '100%',
    height: 5,
  },
})