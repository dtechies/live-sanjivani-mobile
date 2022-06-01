import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const full = () => ({
  flex: 1,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.white,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});
export const titleTextContainer = () => ({
  marginTop: size.moderateScale(20),
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  paddingVertical: size.moderateScale(7),
});
export const dropdown = () => ({
  marginVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.purple,
});
export const selectedOptionTextStyle = () => ({
  fontFamily: fonts.latoBold,
});
export const dropdownContainer = () => ({
  backgroundColor: color.lavender,
});
export const button = () => ({
  width: size.deviceWidth - size.moderateScale(40),
  padding: size.moderateScale(10),
  backgroundColor: color.lightBlue,
  borderWidth: size.moderateScale(2),
  borderColor: color.borderBlue,
  marginVertical: size.moderateScale(15),
});
export const buttonTxt = () => ({
  color: color.borderBlue,
});
