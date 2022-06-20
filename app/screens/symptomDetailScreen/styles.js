import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const full = () => ({
  flex: 1,
});
export const mainView = () => ({
  marginHorizontal: size.moderateScale(15),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const symptomName = () => ({
  color: color.blueTx,
  fontSize: fontSize.veryLarge,
  fontFamily: fonts.latoBold,
  // textAlign: 'center',
  marginTop: size.moderateScale(15),
});
export const textAgeAndGender = () => ({
  color: color.blueTx,
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  // textAlign: 'center',
  marginTop: size.moderateScale(5),
});
export const textConditionDetail = () => ({
  color: color.blueTx,
  fontSize: fontSize.large,
  fontFamily: fonts.latoBold,
  marginBottom: size.moderateScale(5),
});
export const conditionDetailView = () => ({
  borderBottomWidth: size.moderateScale(2),
  borderBottomColor: color.blueTx,
  marginVertical: size.moderateScale(13),
});
export const textTitle = () => ({
  color: color.black,
  fontSize: fontSize.mediumSec,
  fontFamily: fonts.latoBold,
  textTransform: 'capitalize',
});
export const textDescription = () => ({
  color: color.black,
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  lineHeight: size.moderateScale(20),
  marginVertical: size.moderateScale(12),
});
export const pressableButton = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
