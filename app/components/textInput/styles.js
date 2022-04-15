import {color, fonts, fontSize, size} from 'theme';

export const container = () => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: size.moderateScale(1),
  borderColor: color.gainsBoro,
});

export const row = () => ({
  flexDirection: 'row',
});

export const inputContainer = () => ({
  flex: 1,
  backgroundColor: color.white,
  paddingVertical: size.moderateScale(13),
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
});
export const titleTextStyle = () => ({
  color: color.cornBlue,
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
  marginBottom: size.moderateScale(5),
});

export const leftIconContainer = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: size.moderateScale(30),
  width: size.moderateScale(30),
  marginHorizontal: size.moderateScale(2),
});
