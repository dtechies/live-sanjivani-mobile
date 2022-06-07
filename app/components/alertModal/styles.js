import {size, fontSize, color, fonts} from 'theme';

export const container = () => ({
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'absolute',
  height: size.deviceHeight,
  width: size.deviceWidth,
  zIndex: 50000000,
  paddingHorizontal: size.moderateScale(10),
  justifyContent: 'center',
});
export const textDate = () => ({
  fontFamily: fonts.latoRegular,
  color: color.midnightBlue,
  fontSize: fontSize.smallText,
});
export const textTitle = () => ({
  paddingTop: size.moderateScale(5),
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.borderBlue,
  textTransform: 'capitalize',
});
export const textDescription = () => ({
  marginVertical: size.moderateScale(5),
  fontFamily: fonts.latoRegular,
  color: color.dimGrey,
  fontSize: fontSize.verySmall,
});
export const cardStyle = () => ({
  backgroundColor: color.white,
  padding: size.moderateScale(15),
  borderRadius: size.moderateScale(10),
});
export const button = () => ({
  flex: 1,
  backgroundColor: color.turquoise,
  borderWidth: 0,
});
export const snoozeButton = () => ({
  flex: 1,
  backgroundColor: color.starColor,
  borderWidth: 0,
});
export const cancelButton = () => ({
  flex: 1,
  backgroundColor: color.red,
  borderWidth: 0,
  marginHorizontal: size.moderateScale(5),
});
export const takeButton = () => ({
  flex: 1,
  backgroundColor: color.mediumGreen,
  borderWidth: 0,
});
export const textSnooze = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.white,
  textTransform: 'capitalize',
});
export const rowView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: size.moderateScale(10),
});
export const closeIconStyle = () => ({
  alignSelf: 'flex-end',
});
