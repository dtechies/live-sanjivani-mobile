import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
});
export const screenContainer = () => ({
  backgroundColor: color.themeBack,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const cardFirst = () => ({
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(3), width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(5),
});
export const cardSecond = () => ({
  height: size.moderateScale(200),
  marginTop: size.moderateScale(-55),
  backgroundColor: color.white,
  borderWidth: 1,
  borderColor: color.white,
  borderRadius: size.moderateScale(10),
  marginHorizontal: size.moderateScale(15),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(3),
  shadowOffset: {height: size.moderateScale(3), width: 0},
  shadowOpacity: 0.12,
  elevation: size.moderateScale(5),
});
export const cardShort = val => ({
  height: size.deviceHeight * 0.09,
  width: val == 1 ? size.deviceWidth * 0.45 : size.deviceWidth * 0.33,
  backgroundColor: color.white,
  borderWidth: 1,
  borderColor: color.white,
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(3), width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(5),
  marginTop: size.moderateScale(20),
  alignItems: val != 1 ? 'center' : 'flex-start',
  paddingTop: size.moderateScale(7),
  padding: val == 1 ? size.moderateScale(10) : 0,
});

export const button = val => ({
  width: size.deviceWidth * 0.85,
  alignSelf: 'center',
  marginTop: size.moderateScale(20),
});
export const buttonTxt = () => ({
  fontSize: fontSize.small,
  color: color.white,
  fontFamily: fonts.latoBold,
  padding: size.moderateScale(5),
});

//  Input style....
export const inputMain = () => ({
  width: size.deviceWidth * 0.89,
});
export const buttonNew = () => ({
  fontSize: fontSize.small,
  color: color.darkGrey,
});
export const labelFieldText = () => ({
  fontSize: fontSize.mediumLarge,
  fontFamily: fonts.latoBold,
  color: color.blue,
  marginHorizontal: size.moderateScale(57),
  marginTop: size.moderateScale(25),
  textTransform: 'capitalize',
});
export const titleDetails = () => ({
  fontSize: fontSize.smallText,
  fontFamily: fonts.latoRegular,
  color: color.blueCard,
  marginHorizontal: size.moderateScale(57),
  marginTop: size.moderateScale(12),
});

export const dayMain = () => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginTop: size.moderateScale(15),
});
export const backHalf = () => ({
  backgroundColor: color.white,
  height: size.moderateScale(140),
});
export const singleDay = val => ({
  width: size.moderateScale(35),
  height: size.moderateScale(35),
  borderWidth: 1.5,
  borderColor: color.blueLight,
  borderRadius: size.moderateScale(50),
  backgroundColor: val ? color.blueLight : color.white,
  alignItems: 'center',
  justifyContent: 'center',
});
export const singleDayTxt = val => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
  color: val ? color.white : color.blueLight,
});
export const startDateTitleTxt = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.blue,
});
export const startDateTxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.blueCard,
  marginTop: size.moderateScale(15),
});
export const infoCard = () => ({
  flexDirection: 'row',
  marginHorizontal: size.moderateScale(15),
  justifyContent: 'space-between',
});

export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  // marginRight: val == 0 ? 50 : 0,
  marginLeft: 15,
  marginTop: 5,
  marginBottom: 15,
});

// medicine description card

export const medicineDescriptionCard = () => ({
  padding: size.moderateScale(15),
  marginTop: size.moderateScale(30),
  backgroundColor: color.white,
  borderWidth: size.moderateScale(1),
  borderColor: color.white,
  borderRadius: size.moderateScale(10),
  marginHorizontal: size.moderateScale(15),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(3),
  shadowOffset: {height: size.moderateScale(3), width: 0},
  shadowOpacity: 0.12,
  elevation: size.moderateScale(5),
});
export const rowView = () => ({
  flexDirection: 'row',
  marginBottom: size.moderateScale(5),
});
export const title = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.blue,
  width: size.deviceWidth * 0.25,
  textTransform: 'capitalize',
});
export const description = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.blueCard,
  textTransform: 'capitalize',
  flex: 1,
  marginLeft: size.moderateScale(10),
});
