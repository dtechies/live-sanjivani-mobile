import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  paddingTop: size.moderateScale(20),
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  paddingLeft: size.moderateScale(5),
});

export const dropdown = () => ({
  marginVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});

export const selectedOptionTextStyle = () => ({
  fontWeight: 'bold',
});

export const dropdownContainer = () => ({
  backgroundColor: color.lavender,
});
export const inputMainContainer = () => ({
  marginVertical: size.moderateScale(10),
});
export const textDate = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  marginBottom: size.moderateScale(5),
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
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
