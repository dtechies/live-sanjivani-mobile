import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const screenContainer = () => ({
  backgroundColor: color.themeBack,
});
export const container1 = () => ({
  width: size.deviceWidth,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: color.themeBack,
  borderBottom: size.moderateScale(20),
  borderBottomColor: color.borderLight,
  borderBottomWidth: 1.5,
});
export const icon = () => ({
  // width: size.deviceWidth * 0.2,
  flex: 1,
  alignItems: 'center',
  borderRightColor: color.borderLight,
  borderRightWidth: 1,
  paddingVertical: size.moderateScale(15),
});
export const textMain = () => ({
  // width: size.deviceWidth * 0.25,
  marginHorizontal: size.moderateScale(10),
  alignItems: 'flex-start',
  flex: 1,
  // backgroundColor: 'green',
});
export const textTitle = () => ({
  color: color.black,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const textSubTitle = () => ({
  color: color.denim,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(15),
});
export const cardItem = () => ({
  width: size.deviceWidth * 0.29,
  alignItems: 'flex-start',
  backgroundColor: color.white,
  marginHorizontal: size.moderateScale(5),
  borderWidth: 1,
  borderColor: color.white,
  borderRadius: size.moderateScale(10),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
});
export const cardItem1 = val => ({
  // flexDirection: 'row',
  alignItems: 'center',
  flex: 1.5,
  // flexDirection: val ? 'row' : 'colum',
  // backgroundColor: 'red',
});
export const mainCardView = () => ({
  flexDirection: 'row',
  backgroundColor: color.white,
  // width: size.moderateScale(125),
  paddingHorizontal: size.moderateScale(5),
  paddingVertical: size.moderateScale(2),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
  color: color.grayTxt,
  justifyContent: 'space-around',
  marginHorizontal: size.moderateScale(15),
  paddingRight: size.moderateScale(8),
});
export const bpCard = () => ({
  flex: 1,
  width: '100%',
  paddingTop: size.moderateScale(10),
});
export const mainCard = () => ({
  flexDirection: 'row',
  backgroundColor: color.white,
  // width: size.moderateScale(125),
  paddingHorizontal: size.moderateScale(5),
  paddingVertical: size.moderateScale(2),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
  color: color.grayTxt,
  justifyContent: 'space-around',
  marginHorizontal: size.moderateScale(15),
  paddingRight: size.moderateScale(8),
  marginBottom: size.moderateScale(8),
});

export const cardItemInputBoxMain = val => ({
  color: color.grayTxt,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.segoeUIBold,
  paddingVertical: size.moderateScale(10),
  flex: 1,
});
export const cardItemInputBoxText = () => ({
  color: color.grayTxt,
  // flex: 1,
  alignSelf: 'center',
  fontSize: fontSize.verySmall,
  fontFamily: fonts.segoeUIBold,
});
export const cardItemMain = () => ({
  width: size.deviceWidth * 0.35,
  paddingVertical: size.moderateScale(5),
  justifyContent: 'center',
});
export const cardText = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.segoeUIBold,
  color: color.grayTxt,
  // backgroundColor: 'green',
});
export const btnContinue = val => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.02,
  width: size.deviceWidth * 0.89,
  backgroundColor: val == 1 ? color.darkGrey : color.blueBtn,
  borderColor: val == 1 ? color.darkGrey : color.blueBtn,
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: 1,
  elevation: size.moderateScale(4),
  marginBottom: size.moderateScale(25),
});
export const btnContinueTxt = () => ({
  color: color.white,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  color: color.grayTxt,
  fontFamily: fonts.segoeUIBold,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(10),
  textTransform: 'capitalize',
});
// input value
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blue,
  paddingLeft: size.moderateScale(5),
});
export const inputMainContainer = () => ({
  width: size.deviceWidth * 0.6,
  marginBottom: size.moderateScale(5),
  marginLeft: size.moderateScale(20),
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  marginTop: size.moderateScale(5),
  marginBottom: size.moderateScale(5),
});
export const errorTxt = () => ({
  color: color.blueCard,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const textMsgMain = val => ({
  padding: size.moderateScale(25),
});

// drop down style
export const dropDownMain = () => ({
  borderBottomLeftRadius: size.moderateScale(10),
  borderBottomRightRadius: size.moderateScale(10),
  borderTopLeftRadius: size.moderateScale(10),
  borderTopRightRadius: size.moderateScale(10),
});

export const dropdown = () => ({
  width: size.deviceWidth * 0.32,
  marginVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
  borderRadius: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
  marginLeft: size.moderateScale(15),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
});
export const selectedOptionTextStyle = () => ({
  color: color.blueTx,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  textTransform: 'capitalize',
});
export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
  marginTop: size.moderateScale(5),
  borderWidth: 1,
  backgroundColor: color.white,
});
export const separator = () => ({
  backgroundColor: color.borderBlue,
});
