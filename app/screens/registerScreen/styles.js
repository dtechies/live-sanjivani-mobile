import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  paddingTop: size.moderateScale(20),
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
  marginBottom: size.moderateScale(20),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  paddingLeft: size.moderateScale(5),
});

export const dropdown = () => ({
  marginVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});

export const selectedOptionTextStyle = () => ({
  fontFamily: fonts.openSansBold,
});

export const dropdownContainer = () => ({
  backgroundColor: color.lavender,
});
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(15),
});
export const labelDisableText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.darkGrey,
});

export const inputDisableStyle = editable => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.darkGrey,
  paddingLeft: size.moderateScale(5),
});
export const inputMainDisableContainer = editable => ({
  marginBottom: size.moderateScale(10),
});

export const textDate = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const dateMainView = () => ({
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  marginTop: size.moderateScale(10),
  marginBottom: size.moderateScale(10),
  flexDirection: 'row',
  alignItems: 'center',
});

export const button = () => ({
  alignSelf: 'center',
  width: size.deviceWidth * 0.6,
  padding: size.moderateScale(10),
  backgroundColor: color.lightBlue,
  borderWidth: size.moderateScale(2),
  borderColor: color.borderBlue,
  marginVertical: size.moderateScale(15),
});

export const buttonTxt = () => ({
  color: color.borderBlue,
});
