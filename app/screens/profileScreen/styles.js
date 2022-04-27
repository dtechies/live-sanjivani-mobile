import {color, size, fontSize, fonts} from 'theme';

export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const container = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.white,
  marginTop: size.moderateScale(15),
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
  marginBottom: size.moderateScale(10),
});
export const textName = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.darkGrey,
  fontSize: fontSize.medium,
  flex: 1,
  textTransform: 'capitalize',
});
export const textNameTitle = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.darkGrey,
  fontSize: fontSize.medium,
  marginRight: size.moderateScale(5),
  minWidth: size.deviceWidth * 0.25,
  textTransform: 'capitalize',
});
export const nameRow = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: size.moderateScale(5),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth - size.moderateScale(40),
  alignSelf: 'center',
  borderColor: color.dimGrey,
  backgroundColor: color.ghostWhite,
  marginVertical: size.moderateScale(15),
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.darkGrey,
  fontSize: fontSize.small,
});
