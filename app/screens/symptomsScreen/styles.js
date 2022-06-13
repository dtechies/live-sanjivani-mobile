import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const full = () => ({
  flex: 1,
});
export const button = () => ({
  width: size.deviceWidth * 0.4,
  alignSelf: 'center',
  marginTop: size.moderateScale(15),
});
export const buttonTxt = () => ({
  color: color.white,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const placeholderStyle = () => ({
  alignItems: 'center',
  fontSize: fontSize.mediumSec,
});
export const labelTextStyle = () => ({
  width: size.deviceWidth * 0.9,
  textAlign: 'center',
  alignSelf: 'center',
  paddingTop: size.moderateScale(25),
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  fontSize: fontSize.medium,
});
export const labelAgeStyle = () => ({
  paddingLeft: size.moderateScale(10),
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  fontSize: fontSize.smallText,
});
export const inputMain = () => ({
  width: size.deviceWidth * 0.25,
  marginTop: size.moderateScale(10),
});
export const inputSearchStyle = () => ({
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  marginVertical: size.moderateScale(10),
});
export const inputTxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.black,
});
export const inputGenderMain = () => ({
  width: size.deviceWidth * 0.3,
  height: size.deviceWidth * 0.124,
  borderRadius: size.moderateScale(5),
  marginTop: size.moderateScale(10),
  marginRight: size.moderateScale(5),
  backgroundColor: color.white,
  flexDirection: 'row',
  alignItems: 'center',
});
export const inputTextStyle = () => ({
  paddingLeft: size.moderateScale(9),
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
});
export const mainViewStyle = () => ({
  flexDirection: 'row',
  alignItems: 'center',
});
export const circleView = () => ({
  height: size.moderateScale(12),
  width: size.moderateScale(12),
  backgroundColor: color.blueTx,
  borderRadius: size.moderateScale(50),
});
export const leftViewStyle = () => ({
  flex: 2,
  justifyContent: 'center',
});
export const rightViewStyle = () => ({
  flex: 3,
});
export const mainDetailContainer = () => ({
  // flexDirection: 'row',
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(20),
});
export const genderViewContainer = () => ({
  paddingLeft: size.moderateScale(15),
});
export const selectedGenderContainer = () => ({
  flexDirection: 'row',
});
export const dotImg = (isSelected, index) => ({
  width: size.moderateScale(15),
  height: size.moderateScale(15),
  borderWidth: 1,
  borderColor: color.blue,
  borderRadius: size.moderateScale(100),
  backgroundColor: isSelected === index ? color.blueTx : color.white,
  marginLeft: size.moderateScale(15),
  marginRight: size.moderateScale(10),
});
export const dotImgSymptom = val => ({
  width: size.moderateScale(15),
  height: size.moderateScale(15),
  borderWidth: 1,
  borderColor: color.blue,
  borderRadius: size.moderateScale(100),
  backgroundColor: val ? color.blueTx : color.white,
  marginLeft: size.moderateScale(15),
  marginRight: size.moderateScale(10),
});
export const cardTxt = val => ({
  fontSize: fontSize.small,
  color: val ? color.white : color.darkBlue,
});
export const circleBtnView = () => ({
  borderWidth: 1,
  borderColor: color.borderBlue,
  alignItems: 'center',
  justifyContent: 'center',
  width: size.moderateScale(50),
  position: 'absolute',
  bottom: size.moderateScale(60),
  right: size.moderateScale(10),
  height: size.moderateScale(50),
  paddingTop: size.moderateScale(5),
  borderRadius: 100,
});

export const cardDesign = isActive => ({
  borderWidth: size.moderateScale(1),
  borderColor: color.themeBack,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: size.moderateScale(5),
  marginHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  backgroundColor: isActive ? color.denim : color.white,
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(5), width: 0},
  shadowOpacity: 0.4,
  elevation: size.moderateScale(5),
  marginBottom: size.moderateScale(10),
});
export const textValidation = val => ({
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
  marginTop: size.moderateScale(3),
  marginHorizontal: val ? size.moderateScale(20) : 0,
});
export const footerView = () => ({
  backgroundColor: color.themeBack,
  // flex: 0.4,
  width: size.deviceWidth * 1,
  bottom: size.moderateScale(-14),
  position: 'absolute',
});
export const headerView = () => ({
  // flex: 2.2,
});
export const noData = () => ({
  color: color.blueCard,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  textAlign: 'center',
  // marginLeft: size.moderateScale(20),
});

export const buttonFooter = () => ({
  width: size.deviceWidth * 0.35,
  marginBottom: size.moderateScale(20),
  marginTop: size.moderateScale(10),
  alignSelf: 'center',
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  // width: size.moderateScale(50),
  // height: size.moderateScale(40),
  borderRadius: size.moderateScale(10),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const selectedSymptomMainView = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginHorizontal: size.moderateScale(15),
});
export const selectedSymptomRowView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: color.borderBlue,
  borderWidth: size.moderateScale(1),
  margin: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(8),
  paddingVertical: size.moderateScale(5),
  borderRadius: size.moderateScale(5),
});
export const textSymptomName = () => ({
  color: color.blueTx,
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  marginRight: size.moderateScale(5),
});

// gender drop down style

export const dropdown = () => ({
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  borderRadius: size.moderateScale(8),
  backgroundColor: color.white,
  marginTop: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
});
export const selectedOptionTextStyle = () => ({
  color: color.blueTx,
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
});
export const separator = () => ({
  backgroundColor: color.lightPurple,
  height: size.moderateScale(1),
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  color: color.blueTx,
  fontFamily: fonts.latoBold,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(10),
});
export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.dimGrey,
});
