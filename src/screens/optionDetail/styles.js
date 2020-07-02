import {StyleSheet, Platform} from 'react-native';
import {WIDTH} from '../../helper/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 55 : 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    resizeMode: 'contain',
    marginRight: 10,
  },
  coinText: {
    fontSize: 16,
    fontFamily: 'NunitoSans-ExtraBold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 23,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Piedra-Regular',
  },
  flag: {
    width: 35,
    height: 30,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  gradient: {
    width: '100%',
    height: 5,
  },
  bodyContainer: {
    paddingVertical: 20,
  },

  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
