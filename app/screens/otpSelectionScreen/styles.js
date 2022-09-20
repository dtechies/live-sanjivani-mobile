import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(20),
  backgroundColor: color.themeBack,
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.grayTxt,
  paddingHorizontal: size.moderateScale(5),
});
export const inputMainContainer = val => ({
  marginBottom: val ? 0 : size.moderateScale(5),
  flex: 1,
  width: size.deviceWidth * 0.6,
});
export const button = val => ({
  width: size.deviceWidth * 0.3,
  alignSelf: 'center',
  marginTop: size.moderateScale(30),
});
export const buttonTxt = () => ({
  fontSize: fontSize.medium,
  color: color.white,
  fontFamily: fonts.latoBold,
});
export const circleView = val => ({
  width: size.moderateScale(13),
  height: size.moderateScale(13),
  borderColor: val ? color.blueBtn : color.dimGrey,
  borderRadius: size.moderateScale(50),
  borderWidth: size.moderateScale(1),
  padding: size.moderateScale(1.4),
  justifyContent: 'center',
});
export const insideView = val => ({
  flex: 1,
  backgroundColor: val ? color.blueBtn : color.white,
  borderColor: val ? color.blueBtn : color.white,
  borderRadius: size.moderateScale(50),
});
export const radioContainer = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
  marginTop: size.moderateScale(18),
});
export const radioText = () => ({
  color: color.dimGrey,
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(5),
});
export const headingTx = val => ({
  color: color.dimGrey,
  // fontSize: val ? fontSize.verySmall : fontSize.small,
  fontSize: val ? fontSize.mediumSec : fontSize.medium,
  fontFamily: fonts.latoBold,
  marginTop: val ? size.moderateScale(18) : 0,
  marginLeft: val ? size.moderateScale(20) : 0,
});
export const linkContainer = val => ({
  flexDirection: 'row',
  marginLeft: size.moderateScale(25),
  marginBottom: size.moderateScale(18),
  marginTop: size.moderateScale(5),
});
export const termsTx = val => ({
  color: color.dimGrey,
  // fontSize: fontSize.small,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  marginTop: val ? 0 : size.moderateScale(15),
  marginRight: val ? size.moderateScale(10) : 0,
});
export const inputBoxMain = val => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: size.moderateScale(10),
});
export const labelLearn = () => ({
  // fontSize: fontSize.verySmall,
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.strongBlue,
  textDecorationLine: 'underline',
  marginLeft: size.moderateScale(5),
  marginRight: size.moderateScale(5),
});
export const line = () => ({
  backgroundColor: color.dimGrey,
  width: size.moderateScale(1),
  marginLeft: size.moderateScale(5),
});
