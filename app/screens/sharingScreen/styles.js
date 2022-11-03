import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const row = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
});
export const listViewStyle = () => ({
  marginVertical: size.moderateScale(1),
  marginLeft: size.moderateScale(2),
});
export const button = opp => ({
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  marginVertical: size.moderateScale(5),
  opacity: opp ? 0.5 : 1,
});
export const buttonTxt = () => ({
  color: color.white,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  marginTop: size.moderateScale(5),
  marginBottom: size.moderateScale(5),
});
export const emptyText = val => ({
  color: color.blueCard,
  fontSize: fontSize.mediumLarge,
  marginTop: size.moderateScale(30),
  fontFamily: fonts.latoBold,
  alignSelf: 'center',
  textAlign: 'center',
  width: '100%',
});
