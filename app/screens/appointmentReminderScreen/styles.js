import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.white,
});
export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const mainView = () => ({
  marginTop: size.moderateScale(15),
  marginBottom: size.moderateScale(15),
});
export const textInputTitle = () => ({
  fontFamily: fonts.openSansBold,
  color: color.purple,
  fontSize: fontSize.small,
});
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(20),
});
export const labelFieldText = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const textDate = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(10),
});
export const dateMainView = () => ({
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  paddingLeft: size.moderateScale(5),
  marginBottom: size.moderateScale(20),
  flexDirection: 'row',
  alignItems: 'center',
});
export const timeMainView = () => ({
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  paddingHorizontal: size.moderateScale(5),
  marginBottom: size.moderateScale(20),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const textDateTitle = () => ({
  fontFamily: fonts.openSansBold,
  color: color.purple,
  fontSize: fontSize.small,
  marginBottom: size.moderateScale(5),
});
export const titleStyle = () => ({
  marginTop: size.moderateScale(10),
  marginHorizontal: size.moderateScale(30),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
