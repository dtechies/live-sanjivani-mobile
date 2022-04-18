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
// dropdown style
export const dropdown = () => ({
  marginBottom: size.moderateScale(10),
  marginTop: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});
export const placeHolderStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
});
export const selectedOptionTextStyle = () => ({
  fontFamily: fonts.openSansBold,
});
export const dropdownContainer = () => ({
  backgroundColor: color.lavender,
});
export const textItemToShare = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.darkGrey,
  marginTop: size.moderateScale(5),
});
export const textInputTitle = () => ({
  fontFamily: fonts.openSansBold,
  color: color.purple,
  fontSize: fontSize.small,
});
export const inputMainContainer = () => ({
  marginTop: size.moderateScale(5),
});
export const labelFieldText = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const row = () => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: size.moderateScale(25),
});
export const addButtonStyle = email => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth - size.moderateScale(6),
  margin: size.moderateScale(3),
  flex: 1,
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
