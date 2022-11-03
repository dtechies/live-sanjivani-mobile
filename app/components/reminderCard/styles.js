import {size, fontSize, color, fonts} from 'theme';

export const cardMain = val => ({
  width: size.deviceWidth * 0.89,
  borderRadius: size.moderateScale(5),
  marginBottom: size.moderateScale(7),
  paddingVertical: size.moderateScale(8),
  backgroundColor: val ? color.blueLightDark : color.white,
  shadowColor: color.black,
  shadowRadius: size.moderateScale(2),
  shadowOffset: {height: 1, width: 0},
  shadowOpacity: 0.12,
  elevation: size.moderateScale(3),
});
export const cardFirst = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: size.moderateScale(15),
});
export const bottomView = () => ({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingRight: size.deviceWidth * 0.15,
});
export const cardHeading = val => ({
  marginLeft: size.moderateScale(34),
  color: val ? color.darkBlue : color.blueLight,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
});
export const cardReminder = val => ({
  marginLeft: size.moderateScale(7),
  color: val ? color.darkBlue : color.blueLight,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
});
export const cardText = val => ({
  marginLeft: size.moderateScale(34),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.latoRegular,
  color: val ? color.darkBlue : color.blueCard,
});
export const row = () => ({
  alignItems: 'center',
  flexDirection: 'row',
});
