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
  // paddingLeft: size.moderateScale(19),
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  fontSize: fontSize.medium,
});
export const inputMain = () => ({
  // width: size.deviceWidth * 0.55,
});
export const inputTextStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.blueTx,
  paddingHorizontal: size.moderateScale(9),
});
export const mainViewStyle = val => ({
  flexDirection: 'row',
  marginVertical: size.moderateScale(5),
  marginHorizontal: size.moderateScale(19),
  marginTop: val == 1 ? size.moderateScale(20) : 0,
});
export const leftViewStyle = () => ({
  flex: 2,
  justifyContent: 'center',
  alignItems: 'flex-start',
});
export const rightViewStyle = () => ({
  flex: 3,
});
export const containerVal = () => ({
  height: size.deviceHeight * 0.07,
  borderRadius: size.moderateScale(10),
});
export const textValidation = () => ({
  marginLeft: size.moderateScale(150),
  marginBottom: size.moderateScale(10),
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  color: color.red,
  marginTop: size.moderateScale(-3),
});

export const mapPinIconContainer = () => ({
  height: size.moderateScale(50),
  justifyContent: 'center',
});
export const searchPlacesTxt = () => ({
  justifyContent: 'center',
  paddingLeft: size.moderateScale(15),
  paddingVertical: 0,
  paddingHorizontal: 0,
  overflow: 'hidden',
  paddingBottom: 0,
  flex: 1,
  flexDirection: 'row',
  // alignItems: 'center',
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
});

export const searchPlacesInputTxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.black,
  minWidth: size.moderateScale(150),
  // width: size.deviceWidth * 0.77,
  marginRight: size.moderateScale(15),
});
export const searchTitle = () => ({
  fontFamily: fonts.latoRegular,
  color: color.black,
  fontSize: fontSize.small,
  fontWeight: 'bold',
});
export const searchDis = () => ({
  fontFamily: fonts.latoRegular,
  color: color.black,
  fontSize: fontSize.small,
});
export const addressLabel = () => ({
  flex: 2,
  maxHeight: size.moderateScale(50),
  justifyContent: 'center',
});
export const searchRow = () => ({
  marginHorizontal: 0,
  marginLeft: 0,
  padding: 0,
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.4,
});
