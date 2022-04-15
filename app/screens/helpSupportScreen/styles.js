import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(25),
  backgroundColor: color.white,
});
export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const mainView = () => ({
  marginTop: size.moderateScale(20),
  marginBottom: size.moderateScale(15),
});
export const titleStyle = () => ({
  marginTop: size.moderateScale(10),
});
export const textSupport = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
});
export const supportView = () => ({
  borderColor: color.steelBlue,
  borderWidth: size.moderateScale(2),
  padding: size.moderateScale(8),
  marginTop: size.moderateScale(10),
});
export const supportSubcategoriesView = () => ({
  paddingVertical: size.moderateScale(8),
});
export const dashView = () => ({
  marginTop: size.moderateScale(20),
  marginBottom: size.moderateScale(10),
});
