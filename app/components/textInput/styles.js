import {color, fonts, fontSize, size} from 'theme';

export const container = (v1, v2) => ({
  // width: size.deviceWidth * 0.9,
  // flexDirection: 'row',
  // alignItems: 'center',
  // borderWidth: size.moderateScale(1),
  // borderColor: color.white,
  // backgroundColor: color.white,
  // borderRadius: 10,
  // paddingLeft: size.moderateScale(5),
  // height: size.deviceHeight * 0.06,
  // flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  paddingLeft: size.moderateScale(5),
  height: size.deviceHeight * 0.06,
  shadowColor: v2 ? color.black : color.white,
  shadowOffset: v2 ? {width: 0, height: 1} : {width: 0, height: 0},
  shadowOpacity: v2 ? 0.2 : 0,
  shadowRadius: v2 ? 1 : 0,
  elevation: v2 ? size.moderateScale(10) : 0,
});
export const row = () => ({
  flexDirection: 'row',
});
export const inputContainer = (v1, v2) => ({
  flex: v2 ? 0 : 1,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  padding: 0,
  margin: 0,
  color: color.black,
});
export const titleTextStyle = () => ({
  color: color.blueTx,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
  marginBottom: size.moderateScale(5),
});

export const leftIconContainer = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: size.moderateScale(10),
});
export const rightIconContainer = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: size.moderateScale(5),
  padding: size.moderateScale(7),
  borderRadius: size.moderateScale(7),
  paddingLeft: size.moderateScale(15),
  paddingRight: size.moderateScale(15),
  backgroundColor: color.blue,
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.4,
  elevation: size.moderateScale(5),
});
export const rightIconContainerNew = () => ({
  width: size.deviceWidth * 0.26,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: size.moderateScale(5),
  backgroundColor: color.blueBtn,
  height: size.deviceWidth * 0.115,
});
export const rightUnit = () => ({
  // width: size.deviceWidth * 0.3,
  // justifyContent: 'center',
  // alignItems: 'center',
  // borderRadius: size.moderateScale(7),
  // paddingLeft: size.moderateScale(10),
  // paddingRight: size.moderateScale(10),
  // backgroundColor: color.blue,
  // height: size.deviceWidth * 0.12,
  // marginBottom: size.moderateScale(-2),
  // marginTop: size.moderateScale(-2),
  // marginRight: size.moderateScale(-2),
  // marginRight: size.moderateScale(15),
});
export const rightIcon = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: size.moderateScale(20),
});

export const btnTextRight = () => ({
  color: color.white,
  fontSize: fontSize.small,
  // fontFamily: fonts.segoeUIBold,
});
export const btnTextUnit = () => ({
  color: color.grayTxt,
  fontSize: fontSize.medium,
  fontFamily: fonts.segoeUIBold,
});
