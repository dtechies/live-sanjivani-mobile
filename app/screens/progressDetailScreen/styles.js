import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const row = () => ({
  flexDirection: 'row',
  alignItems: 'center',
});
export const mainHeadingView = () => ({
  paddingHorizontal: size.moderateScale(10),
});
export const listViewStyle = () => ({
  marginVertical: size.moderateScale(1),
  marginLeft: size.moderateScale(2),
});
export const screenView = () => ({
  marginVertical: size.moderateScale(10),
  marginHorizontal: size.moderateScale(10),
});
export const textItemToShare = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.black,
  marginTop: size.moderateScale(20),
});
export const textItemValue = () => ({
  fontSize: fontSize.large,
  fontFamily: fonts.latoBold,
  color: color.black,
  paddingLeft: size.moderateScale(10),
});
export const textItemUnit = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.black,
  paddingLeft: size.moderateScale(10),
});
export const textItemDate = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.black,
});
export const textItemToShareDetail = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.black,
  marginVertical: size.moderateScale(15),
});
export const button = () => ({
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  marginBottom: size.moderateScale(5),
});
export const buttonTxt = () => ({
  color: color.white,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const graphStyle = () => ({
  paddingRight: size.moderateScale(30),
  paddingLeft: size.moderateScale(2),
  fontSize: 1,
  borderRadius: size.moderateScale(10),
});
export const centerLeftView = () => ({
  // flex: 1,
  height: size.moderateScale(20),
  width: size.moderateScale(20),
  // paddingLeft: size.moderateScale(5),
});
export const mainDWMYStyle = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: size.moderateScale(10),
  marginVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(8),
  backgroundColor: color.lavender,
});
export const textdwmy = (isSelected, index) => ({
  color: color.black,
  fontSize: fontSize.small,
  fontFamily: fonts.segoeUI,
  borderRadius: size.moderateScale(10),
  backgroundColor: isSelected === index ? color.white : null,
  marginVertical: size.moderateScale(5),
  paddingVertical: size.moderateScale(4),
  paddingHorizontal: size.moderateScale(15),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.4,
  elevation: isSelected === index ? size.moderateScale(10) : 0,
});
