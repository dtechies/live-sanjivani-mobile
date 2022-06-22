import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.themeBack,
});
export const mainProfileStyle = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const searchBarRowView = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: size.moderateScale(10),
});
export const ViewTitle = () => ({
  fontSize: fontSize.veryLarge,
  color: color.blue,
  fontFamily: fonts.latoBold,
});
export const ViewSubTitle = () => ({
  fontSize: fontSize.large,
  color: color.darkBlue,
  fontFamily: fonts.latoBold,
});
export const button = val => ({
  width: size.deviceWidth * 0.3,
  alignSelf: 'center',
  marginBottom: size.moderateScale(15),
});
export const buttonTxt = () => ({
  fontSize: fontSize.verySmall,
  color: color.white,
  fontFamily: fonts.latoBold,
  padding: size.moderateScale(5),
});
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
  alignItems: 'center',
  flexDirection: 'row',
  marginLeft: size.moderateScale(15),
});
export const cardHeading = val => ({
  marginLeft: size.moderateScale(7),
  color: val ? color.darkBlue : color.blueLight,
  fontSize: fontSize.verySmall,
});
export const cardText = val => ({
  marginLeft: size.moderateScale(35),
  marginTop: size.moderateScale(8),
  fontSize: fontSize.verySmall,
  fontFamily: fonts.latoBold,
  color: val ? color.darkBlue : color.blueCard,
});
export const buttonNew = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
});
export const mainInputStyle = () => ({
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 2, width: 0},
  shadowOpacity: 0.15,
  elevation: size.moderateScale(7),
  height: size.moderateScale(42),
  width: size.deviceWidth * 0.7,
  borderRadius: size.moderateScale(5),
});
export const headingMain = () => ({
  // margin: size.moderateScale(15),
  // marginTop: size.moderateScale(20),
  marginBottom: size.moderateScale(10),
});
export const bottomStyle = () => ({
  paddingBottom: size.moderateScale(20),
});
export const noData = () => ({
  color: color.blueCard,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(15),
  textAlign: 'center',
});
export const shadow = () => ({
  marginLeft: size.moderateScale(15),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 2, width: 0},
  shadowOpacity: 0.15,
  elevation: size.moderateScale(7),
});

//model style

export const modalContentContainerStyle = () => ({
  marginBottom: size.moderateScale(15),
});
export const dragStyle = () => ({
  backgroundColor: color.transparent,
});
export const modalStyle = () => ({
  borderTopLeftRadius: size.moderateScale(15),
  borderTopRightRadius: size.moderateScale(15),
  paddingTop: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.white,
});
export const imageView = val => ({
  marginVertical: size.moderateScale(15),
  backgroundColor: color.white,
  justifyContent: 'center',
  marginHorizontal: size.moderateScale(20),
  borderRadius: size.moderateScale(10),
  paddingLeft: size.moderateScale(5),
  height: size.deviceHeight * 0.06,
});
export const textImage = val => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingLeft: size.moderateScale(5),
});
export const imageModelView = val => ({
  marginTop: size.moderateScale(10),
  height: size.deviceHeight * 0.79,
  width: size.deviceWidth,
  alignSelf: 'center',
});
export const crossIconView = () => ({
  alignSelf: 'flex-end',
});
