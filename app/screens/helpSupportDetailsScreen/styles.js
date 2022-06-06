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
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const mainView = () => ({
  marginTop: size.moderateScale(20),
  backgroundColor: color.themeBack,
  //   marginBottom: size.moderateScale(15),
  // flex: 1,
  height: size.deviceHeight * 0.77,
});
export const noData = () => ({
  paddingVertical: size.moderateScale(10),
  fontFamily: fonts.latoBold,
  color: color.blueCard,
  fontSize: fontSize.medium,
});
