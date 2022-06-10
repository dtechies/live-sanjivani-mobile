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
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(20),
  backgroundColor: color.themeBack,
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
  marginBottom: size.moderateScale(20),
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  paddingHorizontal: size.moderateScale(5),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.dimGrey,
  // backgroundColor: 'red',
});
export const dropdown = () => ({
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
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
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(5),
  // backgroundColor: 'red',
});
export const labelDisableText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.darkGrey,
});
export const inputDisableStyle = editable => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoBold,
  color: color.darkGrey,
  paddingLeft: size.moderateScale(5),
});
export const inputMainDisableContainer = editable => ({
  marginBottom: size.moderateScale(10),
});
export const textDate = val => ({
  fontFamily: fonts.latoBold,
  color: val == 1 ? color.grayTxt : color.blueTx,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const dateMainView = () => ({
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  marginTop: size.moderateScale(5),
  marginBottom: size.moderateScale(5),
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: size.moderateScale(5),
});
export const button = val => ({
  width: size.deviceWidth * 0.35,
  alignSelf: 'center',
  marginTop: size.moderateScale(30),
});
export const buttonTxt = () => ({
  fontSize: fontSize.medium,
  color: color.white,
  fontFamily: fonts.latoBold,
});
export const disableLanguage = () => ({
  borderColor: color.darkGrey,
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(5),
  marginBottom: size.moderateScale(10),
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
// export const selectedOptionTextStyle = () => ({
//   color: color.blueTx,
//   fontFamily: fonts.latoBold,
//   fontSize: fontSize.small,
//   marginLeft: size.moderateScale(10),
//   textTransform: 'capitalize',
// });
// export const dropdownContainer = () => ({
//   borderRadius: size.moderateScale(10),
//   marginTop: size.moderateScale(5),
//   borderWidth: 1,
//   backgroundColor: color.white,
// });
// export const separator = () => ({
//   backgroundColor: color.borderBlue,
//   // height: size.moderateScale(1),
// });
// export const InsideLabelFieldText = () => ({
//   fontSize: fontSize.small,
//   fontFamily: fonts.latoBold,
//   color: color.blueTx,
//   paddingVertical: size.moderateScale(5),
//   paddingLeft: size.moderateScale(15),
//   textTransform: 'capitalize',
// });
