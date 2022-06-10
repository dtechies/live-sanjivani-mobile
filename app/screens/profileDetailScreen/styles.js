import {color, size, fonts, fontSize} from 'theme';

export const editIcon = () => ({
  flexDirection: 'row',
  alignItems: 'center',
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const screenContainer = () => ({
  backgroundColor: color.themeBack,
});
export const editText = () => ({
  fontSize: fontSize.small,
  color: color.blue,
  fontFamily: fonts.latoRegular,
  marginRight: size.moderateScale(5),
});
export const settingMain = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: size.moderateScale(30),
  marginTop: size.moderateScale(10),
});
export const editMain = () => ({
  marginTop: size.moderateScale(10),
  marginBottom: size.moderateScale(250),
});
export const inputMain = () => ({
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(3),
  alignSelf: 'center',
});
export const updateMobileNumberInputMain = () => ({
  flex: 1,
});
export const button = val => ({
  width: size.deviceWidth * 0.35,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  color: val ? color.blue : color.darkGrey,
  textTransform: 'capitalize',
});
export const buttonSave = val => ({
  width: size.deviceWidth * 0.35,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  backgroundColor: color.blueBtn,
  borderRadius: size.moderateScale(10),
  alignSelf: 'center',
  color: color.white,
  marginTop: size.moderateScale(10),
});
export const buttonTxt = () => ({
  color: color.white,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
export const cardDesign = () => ({
  width: size.deviceWidth * 0.9,
  borderWidth: size.moderateScale(1),
  borderColor: color.themeBack,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: size.moderateScale(5),
  marginTop: size.moderateScale(5),
  paddingVertical: size.moderateScale(10),
  backgroundColor: color.white,
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(-10), width: 0},
  shadowOpacity: 0.4,
  elevation: size.moderateScale(5),
  marginBottom: size.moderateScale(10),
});
export const labelFieldText = val => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(10),
  color: val ? color.blue : color.darkGrey,
  textTransform: 'capitalize',
});
export const dropdown = () => ({
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  marginVertical: size.moderateScale(3),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});
export const selectedOptionTextStyle = val => ({
  fontFamily: fonts.latoBold,
  marginLeft: size.moderateScale(10),
  color: val ? color.blue : color.darkGrey,
  textTransform: 'capitalize',
});
export const separator = () => ({
  backgroundColor: color.lightPurple,
  height: size.moderateScale(1),
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blue,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(10),
});
export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
});
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(5),
});
export const labelDisableText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.darkGrey,
});
export const dateMainView = () => ({
  width: size.deviceWidth * 0.9,
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  marginTop: size.moderateScale(5),
  marginBottom: size.moderateScale(5),
  flexDirection: 'row',
  alignSelf: 'center',
  borderRadius: size.moderateScale(5),
});
export const textDate = val => ({
  fontFamily: fonts.latoBold,
  color: val ? color.blue : color.darkGrey,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(10),
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
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft: 23,
  marginBottom: 5,
});
export const changePhoneBtnStyle = val => ({
  backgroundColor: val ? color.blue : color.dimGrey,
});
export const dropdown1 = () => ({
  width: size.deviceWidth * 0.15,
  marginVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
  marginLeft: size.moderateScale(20),

  // underlineColor: 'transparent',
});

// country Code drop down style

export const countryCodeDropdown = () => ({
  width: size.deviceWidth * 0.15,
  marginVertical: size.moderateScale(5),
  height: size.deviceHeight * 0.06,
  borderRadius: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(1),
  backgroundColor: color.white,
  marginRight: size.moderateScale(8),
});
export const countryCodeSelectedOptionTextStyle = () => ({
  color: color.blueTx,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
  textTransform: 'capitalize',
});
export const countryCodeDropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
  marginTop: size.moderateScale(5),
  borderWidth: 1,
  backgroundColor: color.white,
});
export const countryCodeSeparator = () => ({
  backgroundColor: color.borderBlue,
});
export const countryCodeInsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(15),
  textTransform: 'capitalize',
});
export const countryCodeRowView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
  marginVertical: size.moderateScale(5),
  marginHorizontal: size.moderateScale(20),
});
