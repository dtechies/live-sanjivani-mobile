import {size, fontSize, color, fonts} from 'theme';

export const cardMain = val => ({
  borderRadius: size.moderateScale(5),
  marginBottom: size.moderateScale(7),
  paddingHorizontal: size.moderateScale(8),
  backgroundColor: val ? color.blueLightDark : color.white,
  shadowColor: color.black,
  shadowRadius: size.moderateScale(2),
  shadowOffset: {height: 1, width: 0},
  shadowOpacity: 0.12,
  elevation: size.moderateScale(3),
});
export const medicationCard = () => ({
  paddingVertical: size.moderateScale(10),
});
export const row = isFlex => ({
  flexDirection: 'row',
});
export const onlyRow = () => ({
  flex: 1,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
export const circleView = () => ({
  height: size.moderateScale(12),
  width: size.moderateScale(12),
  backgroundColor: color.midnightBlue,
  borderRadius: size.moderateScale(50),
});
export const textTime = () => ({
  paddingLeft: size.moderateScale(7),
  fontFamily: fonts.latoRegular,
  color: color.midnightBlue,
  fontSize: fontSize.smallText,
});

export const medicineName = () => ({
  paddingTop: size.moderateScale(10),
  paddingBottom: size.moderateScale(7),
  fontFamily: fonts.latoBold,
  color: color.steelBlue,
  fontSize: fontSize.medium,
});
export const desTextStyle = () => ({
  fontFamily: fonts.latoRegular,
  color: color.dimGrey,
  fontSize: fontSize.verySmall,
});
export const circleDateView = () => ({
  height: size.moderateScale(12),
  width: size.moderateScale(12),
  marginLeft: size.moderateScale(10),
  backgroundColor: color.midnightBlue,
  borderRadius: size.moderateScale(50),
});
