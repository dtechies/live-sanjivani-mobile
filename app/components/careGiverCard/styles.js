import {size, fontSize, color, fonts} from 'theme';

export const cardMain = val => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(20),
  // width: size.deviceWidth * 0.89,
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
export const row = val => ({
  // flex: 1,

  marginTop: size.moderateScale(5),
  flexDirection: 'row',
});
export const rowSecond = val => ({
  marginTop: size.moderateScale(5),
  // flex: 1,
  justifyContent: 'space-between',
  flexDirection: 'row',
});
export const cardText = () => ({
  // paddingHorizontal: size.moderateScale(15),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.latoRegular,
  color: color.black,
});
export const addressLabel = () => ({
  // paddingHorizontal: size.moderateScale(15),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.latoRegular,
  color: color.steelBlue,
});
export const cardHeaderText = () => ({
  // paddingHorizontal: size.moderateScale(15),
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.steelBlue,
});
export const cardTextLastName = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.latoRegular,
  color: color.black,
});
export const cardTextEmail = () => ({
  marginRight: size.moderateScale(15),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.latoRegular,
  color: color.cornBlue,
});
export const crossSvgStyle = () => ({
  // backgroundColor: 'red',
  // alignSelf: 'flex-end',
  padding: size.moderateScale(5),
  // paddingBottom: size.moderateScale(10),
});
