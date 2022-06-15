import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: color.themeBack,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const inputMain = () => ({
  flex: 1,
  // width: size.deviceWidth * 0.89,
  borderColor: color.white,
  shadowColor: color.black,
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: size.moderateScale(4),
});
export const imageView = () => ({
  marginTop: size.moderateScale(70),
  marginLeft: size.moderateScale(20),
  marginBottom: size.moderateScale(60),
  alignItems: 'center',
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});

export const labelFieldText = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.dimGrey,
});
export const labelLoginTxt = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.dimGrey,
});
export const labelOrTxt = () => ({
  marginTop: size.moderateScale(15),
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.dimGrey,
  alignSelf: 'center',
});
export const inputMainDisableContainer = editable => ({
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(10),
});
export const btnRegister = () => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.03,
  width: size.deviceWidth * 0.88,
  backgroundColor: color.white,
  borderColor: color.white,
  shadowColor: color.black,
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: size.moderateScale(4),
});
export const inputTxt = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.dimGrey,
});

export const btnRegisterTxt = () => ({
  color: color.dimGrey,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
});
export const linkView = () => ({
  marginTop: size.moderateScale(20),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
export const textValidation = () => ({
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
});
export const validationView = () => ({
  height: size.moderateScale(15),
});

//drop down style

export const dropdown = () => ({
  width: size.deviceWidth * 0.16,
  marginVertical: size.moderateScale(5),
  height: size.deviceHeight * 0.06,
  borderRadius: size.moderateScale(10),
  paddingVertical: size.moderateScale(7),
  backgroundColor: color.white,
  marginRight: size.moderateScale(8),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: size.moderateScale(4),
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
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(15),
  textTransform: 'capitalize',
});
export const rowView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: size.moderateScale(10),
});
