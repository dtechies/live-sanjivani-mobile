import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  alignItems: 'center',
});

export const imageView = () => ({
  marginVertical: size.moderateScale(40),
  alignItems: 'center',
  // backgroundColor: 'red',
  // height: size.deviceWidth * 0.4,
  // width: size.deviceWidth * 0.4,
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
});
export const labelFieldLinkText = () => ({
  marginRight: size.moderateScale(10),
  textDecorationLine: 'underline',
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.mediumGreen,
});
export const inputStyle = editable => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,

  paddingLeft: size.moderateScale(5),
});
export const inputMainContainer = editable => ({
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(10),
  // backgroundColor: 'red',
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
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(10),
});
export const button = () => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.02,
  width: size.deviceWidth * 0.6,
  height: size.moderateScale(40),
  backgroundColor: color.lightBlue,
  borderWidth: size.moderateScale(2),
  borderColor: color.borderBlue,
});

export const buttonTxt = () => ({
  color: color.borderBlue,
});

export const linkView = () => ({
  marginTop: size.moderateScale(20),
  alignSelf: 'center',
  flexDirection: 'row',
});
