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
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
  marginBottom: size.moderateScale(20),
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingHorizontal: size.moderateScale(5),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.dimGray,
});
export const dropdown = () => ({
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});
export const selectedOptionTextStyle = () => ({
  color: color.blueTx,
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
});
export const separator = () => ({
  backgroundColor: color.lightPurple,
  height: size.moderateScale(1),
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  color: color.blueTx,
  fontFamily: fonts.latoBold,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(10),
});
export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
});
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(5),
  // backgroundColor: 'red',
});
export const labelDisableText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.darkGrey,
});
export const inputDisableStyle = editable => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.darkGrey,
  paddingLeft: size.moderateScale(5),
});
export const inputMainDisableContainer = editable => ({
  marginBottom: size.moderateScale(10),
});
export const textDate = val => ({
  fontFamily: fonts.latoBold,
  color: val == 1 ? color.grayTxt : color.blueTx,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const dateMainView = () => ({
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  marginTop: size.moderateScale(5),
  marginBottom: size.moderateScale(5),
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: size.moderateScale(5),
});
export const button = val => ({
  width: size.deviceWidth * 0.35,
  alignSelf: 'center',
  marginTop: size.moderateScale(30),
});
export const buttonTxt = () => ({
  fontSize: fontSize.medium,
  color: color.white,
  fontFamily: fonts.latoBold,
});
export const disableLanguage = () => ({
  borderColor: color.darkGrey,
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(5),
  marginBottom: size.moderateScale(10),
});
