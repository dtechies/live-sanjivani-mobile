import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const screenContainer = () => ({
  backgroundColor: color.themeBack,
});
export const btnContinue = () => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.02,
  width: size.deviceWidth * 0.89,
  backgroundColor: color.blueBtn,
  borderColor: color.blueBtn,
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 3},
  shadowOpacity: 0.15,
  shadowRadius: 1,
  elevation: size.moderateScale(5),
  marginBottom: size.moderateScale(25),
});
export const btnContinueTxt = () => ({
  color: color.white,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});
export const headingTxt = () => ({
  color: color.blueTx,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(12),
});
export const headOne = val => ({
  marginTop: size.moderateScale(10),
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(30),
  borderBottomWidth: val == 1 ? 0.2 : 0,
  borderBottomColor: color.darkGrey,
  paddingBottom: val == 1 ? size.moderateScale(10) : 0,
});
export const headingFirst = val => ({
  marginTop: val == 1 ? 0 : size.moderateScale(10),
  borderTopWidth: 0.2,
  borderTopColor: color.darkGrey,
});
export const itemListMain = val => ({
  marginTop: val == 1 ? size.moderateScale(12) : size.moderateScale(5),
  alignItems: 'center',
  flexDirection: 'row',
  paddingLeft: size.moderateScale(30),
});
export const itemListTxt = val => ({
  width: size.deviceWidth * 0.22,
  color: color.black,
  fontSize: val == 1 ? fontSize.verySmall : fontSize.medium,
  fontFamily: fonts.latoRegular,
});

//drop down
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  color: color.dimGray,
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(10),
});
export const dropDownMain = () => ({
  borderBottomLeftRadius: size.moderateScale(10),
  borderBottomRightRadius: size.moderateScale(10),
  borderTopLeftRadius: size.moderateScale(10),
  borderTopRightRadius: size.moderateScale(10),
});

export const dropdown = () => ({
  width: size.deviceWidth * 0.6,
  marginVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
  marginLeft: size.moderateScale(20),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 1,
  elevation: size.moderateScale(10),
  // underlineColor: 'transparent',
});
export const selectedOptionTextStyle = () => ({
  color: color.blueTx,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  textTransform: 'capitalize',
});
export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
  marginTop: size.moderateScale(5),
  borderWidth: 1,
  backgroundColor: color.white,
});
export const separator = () => ({
  backgroundColor: color.borderBlue,
  // height: size.moderateScale(1),
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(15),
  textTransform: 'capitalize',
});

export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blue,
  paddingLeft: size.moderateScale(5),
});

export const inputMainContainer = () => ({
  width: size.deviceWidth * 0.6,
  marginBottom: size.moderateScale(5),
  marginLeft: size.moderateScale(20),
});
export const containerStyle = () => ({
  borderRadius: 5,
});

export const btnContainer = () => ({
  marginTop: size.moderateScale(30),
});
export const cardContainer = () => ({
  width: size.deviceWidth * 0.6,
  marginBottom: size.moderateScale(5),
  marginLeft: size.moderateScale(20),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
  padding: size.moderateScale(12),
  backgroundColor: color.white,
  borderRadius: size.moderateScale(5),
});
export const dateText = val => ({
  color: val == 1 ? color.dimGray : color.blueTx,
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  // marginRight: val == 0 ? 50 : 0,
  alignSelf: 'center',
  marginLeft: size.moderateScale(-30),
  // marginLeft: 100,
  // marginTop: val == 1 ? 5 : -5,
  // marginBottom: 15,
});
