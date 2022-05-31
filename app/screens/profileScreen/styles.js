import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(20),
  backgroundColor: color.themeBack,
});
export const mainProfileStyle = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: size.moderateScale(20),
});
export const subProfileStyle = val => ({
  backgroundColor: color.white,
  height: size.moderateScale(110),
  width: size.moderateScale(125),
  borderRadius: size.moderateScale(10),
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: val == 1 ? size.moderateScale(40) : size.moderateScale(20),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 5},
  shadowOpacity: 0.09,
  elevation: size.moderateScale(10),
});
export const profileText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  textAlign: 'center',
  paddingTop: size.moderateScale(5),
});
