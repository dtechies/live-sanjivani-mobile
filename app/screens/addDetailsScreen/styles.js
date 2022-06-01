import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
});
export const screenContainer = () => ({
  backgroundColor: color.themeBack,
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
  paddingVertical: size.moderateScale(15),
});
export const textMain = () => ({
  width: size.deviceWidth * 0.25,
  marginHorizontal: size.moderateScale(10),
  alignItems: 'flex-start',
});
export const textTitle = () => ({
  color: color.black,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
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
export const cardItem1 = () => ({
  flexDirection: 'row',
  alignItems: 'center',
});
export const cardItemInputBoxMain = val => ({
  backgroundColor: color.white,
  width: size.moderateScale(110),
  height: size.moderateScale(50),
  paddingLeft: size.moderateScale(15),
  paddingRight: size.moderateScale(val == 3 ? 65 : 45),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
  color: color.grayTxt,
  fontSize: fontSize.small,
  fontFamily: fonts.segoeUIBold,
});
export const cardItemInputBoxText = val => ({
  marginLeft: size.moderateScale(
    val == 1 ? -55 : val == 2 ? -30 : val == 3 ? -65 : -45,
  ),
  color: color.grayTxt,
  fontSize: fontSize.small,
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
  // width: size.moderateScale(40),
  backgroundColor: 'green',
});
export const btnContinue = () => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.02,
  width: size.deviceWidth * 0.89,
  backgroundColor: color.blueBtn,
  borderColor: color.blueBtn,
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
//drop down
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  color: color.grayTxt,
  fontFamily: fonts.segoeUIBold,
  marginLeft: size.moderateScale(10),
});
export const dropdown = () => ({
  width: size.deviceWidth * 0.3,
  alignItems: 'flex-start',
  backgroundColor: color.white,
  // marginHorizontal: size.moderateScale(5),
  marginVertical: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  borderWidth: 1,
  borderColor: color.white,
  borderRadius: size.moderateScale(10),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: 3, width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(10),
  justifyContent: 'space-between',
  paddingRight: size.moderateScale(10),
});
export const selectedOptionTextStyle = () => ({
  color: color.grayTxt,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  textTransform: 'capitalize',
});
export const dropDownMain = () => ({
  borderBottomLeftRadius: size.moderateScale(10),
  borderBottomRightRadius: size.moderateScale(10),
  borderTopLeftRadius: size.moderateScale(10),
  borderTopRightRadius: size.moderateScale(10),
});

export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
  borderWidth: 1,
  backgroundColor: color.white,
  marginTop: size.moderateScale(10),
  // borderColor: 'red',
  // backgroundColor: 'green',
  // borderBottomLeftRadius: size.moderateScale(10),
  // borderBottomRightRadius: size.moderateScale(10),
  // backgroundColor: 'red',
});
export const separator = () => ({
  backgroundColor: color.borderBlue,
  // height: size.moderateScale(1),
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
  // marginRight: val == 0 ? 50 : 0,
  marginLeft: 10,
  marginTop: 5,
  marginBottom: 15,
});
