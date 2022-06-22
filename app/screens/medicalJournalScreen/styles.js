import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  justifyContent: 'center',
  backgroundColor: color.themeBack,
  marginBottom: size.deviceHeight * 0.08,
});
export const screenContainer = () => ({
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
  width: size.deviceWidth * 0.35,
  backgroundColor: color.blueBtn,
  borderColor: color.blueBtn,
  borderRadius: size.moderateScale(10),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: 1,
  elevation: size.moderateScale(4),
});
export const btnContinueTxt = () => ({
  color: color.white,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});
export const cardDesign = val => ({
  flex: 1,
  marginTop: size.moderateScale(10),
  marginBottom: size.moderateScale(5),
  marginLeft: val == 1 ? size.moderateScale(40) : size.moderateScale(0),
  flexDirection: 'row',
  alignItems: 'center',
});
export const cardTxt = (val, fontsizeChange) => ({
  fontSize:
    val == 1
      ? fontsizeChange
        ? fontSize.medium
        : fontSize.mediumLargeSec
      : fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.headerBlue,
  marginLeft: size.moderateScale(val == 2 ? 19 : 7),
  marginTop: size.moderateScale(val == 2 ? 19 : 0),
});
export const listJournalHeader = val => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.headerBlue,
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
  marginHorizontal: size.moderateScale(13),
  marginTop: val == 1 ? size.moderateScale(20) : size.moderateScale(10),
});
export const dateTimeCardStyle = () => ({
  flexDirection: 'row',
  marginHorizontal: size.moderateScale(20),
  justifyContent: 'space-between',
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft:
    val == 1 ? size.moderateScale(0) : val == 2 ? size.moderateScale(21) : 0,
});
export const errorText1 = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginRight: size.moderateScale(23),
});
export const cardView = val => ({
  backgroundColor: color.white,
  shadowColor: color.black,
  shadowOffset: {width: 0, height: size.moderateScale(3)},
  shadowOpacity: 0.2,
  shadowRadius: size.moderateScale(3),
  elevation: size.moderateScale(5),
  paddingVertical: size.moderateScale(15),
  borderRadius: size.moderateScale(5),
  marginLeft: val == 1 ? size.moderateScale(10) : 0,
  width: size.deviceWidth * 0.39,
});
export const inputMain = () => ({
  width: size.deviceWidth * 0.89,
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
  marginHorizontal: size.moderateScale(21),
  backgroundColor: color.white,
  marginVertical: size.moderateScale(5),
  justifyContent: 'space-between',
});
export const row = () => ({
  flexDirection: 'row',
  marginLeft: size.moderateScale(21),
  marginBottom: size.moderateScale(5),
  alignItems: 'center',
});
export const rowImage = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
export const textTodayProgress = () => ({
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
  height: size.moderateScale(400),
  width: size.moderateScale(400),
  alignSelf: 'center',
});
export const crossIconView = () => ({
  alignSelf: 'flex-end',
});
export const containerVal = () => ({
  backgroundColor: color.white,
  padding: size.moderateScale(11),
  paddingTop: size.moderateScale(10),
  textAlignVertical: 'top',
  height: size.deviceHeight * 0.2,
  marginHorizontal: size.moderateScale(20),
  borderRadius: size.moderateScale(10),
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.blueTx,
  marginBottom: size.moderateScale(40),
});
export const inputTextStyle = () => ({
  paddingHorizontal: size.moderateScale(9),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
