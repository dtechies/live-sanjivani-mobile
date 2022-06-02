import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  justifyContent: 'center',
  backgroundColor: color.themeBack,
  //
});
export const screenContainer = () => ({
  //   paddingHorizontal: size.moderateScale(20),
  // backgroundColor: 'red',
  marginBottom: size.moderateScale(35),
});
//
export const mainProfileStyle = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: size.moderateScale(20),
});
export const subProfileStyle = () => ({
  backgroundColor: color.white,
  height: size.moderateScale(110),
  width: size.moderateScale(125),
  borderRadius: size.moderateScale(10),
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: size.moderateScale(20),
});
export const profileText = () => ({
  fontSize: fontSize.small,
  fontWeight: 'bold',
  color: color.blueTx,
  textAlign: 'center',
  paddingTop: size.moderateScale(5),
});

//
// import {color, fontSize, size} from 'theme';

export const container1 = () => ({
  width: size.deviceWidth * 1,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: color.themeBack,
  borderBottom: size.moderateScale(20),
  borderBottomColor: color.borderLight,
  borderBottomWidth: 1.5,
});
export const icon = () => ({
  width: size.deviceWidth * 0.35,
  alignItems: 'center',
  borderRightColor: color.borderLight,
  borderRightWidth: 1,
});
export const textMain = () => ({
  width: size.deviceWidth * 0.25,
  marginHorizontal: size.moderateScale(10),
  alignItems: 'flex-start',
});
export const cardItemMain = () => ({
  width: size.deviceWidth * 0.35,
  paddingVertical: size.moderateScale(5),
  justifyContent: 'center',
});
export const btnContinue = () => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.02,
  width: size.deviceWidth * 0.35,
  backgroundColor: color.blueBtn,
  borderColor: color.blueBtn,
  borderRadius: size.moderateScale(10),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: 1,
  elevation: size.moderateScale(4),
  marginTop: size.moderateScale(35),
});
export const btnContinueTxt = () => ({
  color: color.white,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});
export const cardDesign = val => ({
  marginTop: size.moderateScale(10),
  marginHorizontal: size.moderateScale(val == 1 ? size.moderateScale(102) : 0),
  marginBottom: size.moderateScale(5),
  flexDirection: 'row',
  alignItems: 'center',
});
export const cardTxt = val => ({
  fontSize: val == 1 ? fontSize.mediumLargeSec : fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.headerBlue,
  marginLeft: size.moderateScale(val == 1 ? 0 : 7),
});
export const listJournalHeader = val => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.headerBlue,
  // marginLeft: size.moderateScale(25),
  marginLeft: size.moderateScale(5),
});
export const circleView = () => ({
  height: size.moderateScale(13),
  width: size.moderateScale(13),
  backgroundColor: color.headerBlue,
  borderRadius: size.moderateScale(50),
});
export const headingMain = val => ({
  flexDirection: 'row',
  marginHorizontal: size.moderateScale(30),
  marginTop: val == 1 ? size.moderateScale(20) : size.moderateScale(10),
  // backgroundColor: 'red',
  // justifyContent: 'space-between',
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  // marginRight: val == 0 ? 50 : 0,
  marginLeft:
    val == 1 ? size.moderateScale(45) : val == 2 ? size.moderateScale(30) : 0,
});
export const errorText1 = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  // marginRight: val == 0 ? 50 : 0,
  marginLeft:
    val == 1 ? size.moderateScale(170) : val == 2 ? size.moderateScale(30) : 0,
});
export const cardView = val => ({
  backgroundColor: color.white,
  shadowColor: color.black,
  shadowOffset: {width: 0, height: size.moderateScale(3)},
  shadowOpacity: 0.2,
  shadowRadius: size.moderateScale(3),
  elevation: size.moderateScale(5),
  paddingVertical: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(28),
  borderRadius: size.moderateScale(5),
  marginLeft: val == 1 ? size.moderateScale(10) : 0,
  width: val == 1 ? size.deviceWidth * 0.39 : size.deviceWidth * 0.42,
});
export const inputMain = () => ({
  width: size.deviceWidth * 0.85,
  alignSelf: 'center',
  margin: size.moderateScale(10),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.12,
  shadowRadius: size.moderateScale(3),
  elevation: size.moderateScale(5),
});
export const button = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.blueBtn,
});
export const inputValue = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.blueBtn,
  marginLeft: size.moderateScale(10),
});
export const mainContainerStyle = () => ({
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: size.moderateScale(3),
  elevation: size.moderateScale(9),
});

// modal style

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
export const submitButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(10),
  borderColor: color.blueBtn,
  backgroundColor: color.blueBtn,
  alignSelf: 'center',
});
export const textSubmitButton = () => ({
  fontFamily: fonts.latoBold,
  color: color.white,
  fontSize: fontSize.small,
});
export const MedicalJournalListView = () => ({
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20),
  borderRadius: size.moderateScale(10),
  marginHorizontal: size.moderateScale(30),
  backgroundColor: color.white,
  marginVertical: size.moderateScale(5),
  justifyContent: 'space-between',
});
export const row = () => ({
  flexDirection: 'row',
  marginLeft: size.moderateScale(30),
  marginBottom: size.moderateScale(5),
  alignItems: 'center',
  // backgroundColor: 'red',
});
export const rowImage = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
export const textTodayProgress = () => ({
  // paddingTop: size.moderateScale(10),
  // paddingBottom: size.moderateScale(7),
  fontFamily: fonts.latoBold,
  color: color.steelBlue,
  fontSize: fontSize.small,
});
export const desTextStyle = () => ({
  paddingTop: size.moderateScale(10),
  fontFamily: fonts.latoRegular,
  color: color.dimGrey,
  fontSize: fontSize.medium,
});
