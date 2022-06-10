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
  width: size.deviceWidth * 0.89,
  marginTop: size.moderateScale(10),
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

//drop down
// export const labelFieldText = () => ({
//   fontSize: fontSize.small,
//   color: color.dimGray,
//   fontFamily: fonts.latoBold,
//   marginLeft: size.moderateScale(10),
// });
export const dropDownMain = () => ({
  borderBottomLeftRadius: size.moderateScale(10),
  borderBottomRightRadius: size.moderateScale(10),
  borderTopLeftRadius: size.moderateScale(10),
  borderTopRightRadius: size.moderateScale(10),
});

export const dropdown = () => ({
  width: size.deviceWidth * 0.15,
  marginVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
  marginLeft: size.moderateScale(20),

  // underlineColor: 'transparent',
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
  // height: size.moderateScale(1),
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(15),
  textTransform: 'capitalize',
});
