import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const textItemToShare = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.black,
  marginTop: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
});
export const textItemToShareDetail = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.black,
  marginTop: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(20),
});
export const textInputTitle = () => ({
  fontFamily: fonts.latoBold,
  color: color.purple,
  fontSize: fontSize.small,
});
export const inputMainContainer = () => ({
  marginHorizontal: size.moderateScale(15),
  marginTop: size.moderateScale(15),
});
export const labelFieldText = () => ({
  paddingLeft: size.moderateScale(5),
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.black,
});
export const row = () => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: size.moderateScale(10),
  marginHorizontal: size.moderateScale(12),
});
export const addButtonStyle = () => ({
  margin: size.moderateScale(3),
  flex: 1,
  backgroundColor: color.blueBtn,
});
export const textAddButton = () => ({
  fontFamily: fonts.latoRegular,
  color: color.white,
  fontSize: fontSize.small,
});
export const rowListView = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
});
export const listViewStyle = () => ({
  marginVertical: size.moderateScale(1),
  marginLeft: size.moderateScale(2),
});
export const textValidation = () => ({
  marginLeft: size.moderateScale(20),
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
});
