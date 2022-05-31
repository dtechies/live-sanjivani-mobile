import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(10),
  backgroundColor: color.themeBack,
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  marginLeft: size.moderateScale(7),
});
export const labelFieldDropText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  marginLeft: size.moderateScale(10),
});
export const labelFieldText1 = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.dimGray,
  marginLeft: size.moderateScale(7),
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingLeft: size.moderateScale(5),
});
export const dropdown = val => ({
  marginVertical: val == 1 ? size.moderateScale(0) : size.moderateScale(10),
  marginTop: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  borderRadius: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});

export const inputMainContainer = () => ({
  marginVertical: size.moderateScale(7),
});
export const textDate = () => ({
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  fontSize: fontSize.small,
});
export const showtimeMain = val => ({
  // marginLeft: size.moderateScale(5),
  // marginBottom: size.moderateScale(5),
  backgroundColor: color.white,
  padding: size.moderateScale(15),
  // width: size.deviceWidth * 0.89,
  boredrWidth: 1,
  borderRadius: size.moderateScale(10),
  marginTop: val == 1 || val == 11 ? 0 : size.moderateScale(10),
  marginBottom:
    val == 1 || val == 11 ? size.moderateScale(10) : size.moderateScale(10),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
  marginVertical: size.moderateScale(15),
});
export const textAddButton = () => ({
  fontFamily: fonts.latoBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
export const dropDownMain = () => ({
  borderBottomLeftRadius: size.moderateScale(10),
  borderBottomRightRadius: size.moderateScale(10),
  borderTopLeftRadius: size.moderateScale(10),
  borderTopRightRadius: size.moderateScale(10),
});
export const button = val => ({
  width: size.deviceWidth * 0.35,
  alignSelf: 'center',
  marginTop: size.moderateScale(15),
  marginBottom: size.moderateScale(25),
});
export const buttonTxt = () => ({
  fontSize: fontSize.medium,
  color: color.white,
  fontFamily: fonts.latoBold,
});

export const selectedOptionTextStyle = () => ({
  color: color.blueTx,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(5),
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
// modal style
export const modalContentContainerStyle = () => ({
  marginBottom: size.moderateScale(15),
});
export const dragStyle = () => ({
  backgroundColor: color.transparent,
});
export const modalStyle = () => ({
  borderTopLeftRadius: size.moderateScale(15),
  borderTopRightRadius: size.moderateScale(15),
  paddingTop: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.white,
});
export const submitButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(10),
  borderColor: color.blueBtn,
  backgroundColor: color.blueBtn,
  alignSelf: 'center',
});
export const textSubmitButton = () => ({
  fontFamily: fonts.latoBold,
  color: color.white,
  fontSize: fontSize.small,
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  // marginRight: val == 0 ? 50 : 0,
  marginLeft: size.moderateScale(10),
  marginTop: val == 1 ? 5 : -5,
  marginBottom: size.moderateScale(15),
});
export const imageView = val => ({
  marginTop: size.moderateScale(8),
  marginBottom: size.moderateScale(10),
  backgroundColor: color.white,
  justifyContent: 'center',
  borderRadius: size.moderateScale(10),

  paddingLeft: size.moderateScale(5),
  height: size.deviceHeight * 0.06,
});
export const textImage = val => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingLeft: size.moderateScale(5),
});
export const imageModelView = val => ({
  marginTop: size.moderateScale(10),
  height: size.moderateScale(400),
  width: size.moderateScale(400),
  alignSelf: 'center',
});
