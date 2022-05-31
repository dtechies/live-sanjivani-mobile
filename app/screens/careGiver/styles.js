import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const button = () => ({
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  marginBottom: size.moderateScale(25),
});
export const buttonTxt = () => ({
  color: color.white,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const placeholderStyle = () => ({
  alignItems: 'center',
  fontSize: fontSize.mediumSec,
});
export const labelTextStyle = () => ({
  paddingLeft: size.moderateScale(30),
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  fontSize: fontSize.medium,
});
export const inputMain = () => ({
  width: size.deviceWidth * 0.55,
});
export const inputTextStyle = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
  color: color.blueTx,
  paddingLeft: size.moderateScale(5),
});
export const mainViewStyle = val => ({
  flexDirection: 'row',
  marginVertical: size.moderateScale(5),
  marginTop: val == 1 ? size.moderateScale(20) : 0,
});
export const leftViewStyle = () => ({
  flex: 2,
  justifyContent: 'center',
});
export const rightViewStyle = () => ({
  flex: 3,
});
export const containerVal = () => ({
  height: size.deviceHeight * 0.07,
  borderRadius: size.moderateScale(10),
});
export const textValidation = () => ({
  marginLeft: size.moderateScale(30),
  marginBottom: size.moderateScale(3),
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
});
