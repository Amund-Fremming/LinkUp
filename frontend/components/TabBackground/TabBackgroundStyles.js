import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../styles/genericDimensions';

export const styles = StyleSheet.create({
  backgroundCard: {
    height: '100%',
    width: '100%',
    backgroundColor: '#5A5DF0',
    justifyContent: 'flex-end',
  },

  foregroundCard: {
    backgroundColor: 'white',
    height: '85%',
    width: '100%',
    borderTopEndRadius: moderateScale(25),
    borderTopStartRadius: moderateScale(25),
  },

  tabWrapper: {
    flexDirection: 'row',
    height: verticalScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(35),
    paddingBottom: verticalScale(20),
  },

  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(43),
  },

  tabUnderline: {
    height: verticalScale(5),
    width: verticalScale(123),
    borderRadius: moderateScale(100),
  },

  tabText: {
    fontFamily: 'BalooBold',
    fontSize: moderateScale(35),
    color: 'white',
  },
});
