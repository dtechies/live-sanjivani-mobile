import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(25),
  backgroundColor: color.themeBack,
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
  paddingLeft: size.moderateScale(10),
  fontFamily: fonts.latoRegular,
  color: color.blue,
  fontSize: fontSize.small,
});
export const textMainHeader = () => ({
  paddingLeft: size.moderateScale(10),
  fontFamily: fonts.latoBold,
  color: color.blue,
  fontSize: fontSize.large,
});
export const supportView = () => ({
  shadowColor: color.black,
  shadowOffset: {width: 3, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: size.moderateScale(6),
  backgroundColor: color.white,
  borderRadius: size.moderateScale(5),
  padding: size.moderateScale(8),
  marginTop: size.moderateScale(10),
});
export const supportSubcategoriesView = () => ({
  flexDirection: 'row',
  paddingVertical: size.moderateScale(8),
});
export const dashView = () => ({
  marginTop: size.moderateScale(20),
  marginBottom: size.moderateScale(10),
});
