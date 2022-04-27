import {color, size, fontSize, fonts} from 'theme';

export const full = () => ({
  flex: 1,
});
export const container = () => ({
  flex: 1,
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(5),
});
export const titleStyle = () => ({
  marginTop: size.moderateScale(10),
});

export const textValidation = () => ({
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
});
export const inputMainContainer = () => ({
  marginVertical: size.moderateScale(8),
});
export const labelFieldText = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth - size.moderateScale(40),
  marginTop: size.moderateScale(10),
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
