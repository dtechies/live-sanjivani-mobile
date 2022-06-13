import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const mainContainer = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(20),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const itemHeader = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: size.moderateScale(15),
  marginTop: size.moderateScale(10),
});
export const itemRow = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(20),
});
export const headingTxt = () => ({
  color: color.blueTx,
  fontSize: fontSize.mediumLarge,
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(12),
});
export const itemListTxt = () => ({
  color: color.black,
  fontSize: fontSize.mediumLargeSec,
  fontFamily: fonts.latoRegular,
  fontWeight: 'bold',
  paddingVertical: size.moderateScale(1),
});
export const itemValueTxt = () => ({
  color: color.modelTxtColor,
  fontSize: fontSize.mediumLargeSec,
  fontFamily: fonts.latoRegular,
  paddingVertical: size.moderateScale(1),
});
export const shadow = () => ({
  // marginLeft: size.moderateScale(15),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 1, width: 0},
  shadowOpacity: 0.15,
  elevation: size.moderateScale(7),
});
export const mainRow = last => ({
  ...shadow(),
  backgroundColor: color.themeBack,
  borderBottomWidth: 1,
  borderLeftWidth: 1,
  borderColor: color.dimGrey,
  borderRadius: size.moderateScale(10),
  marginBottom: size.moderateScale(10),
});
