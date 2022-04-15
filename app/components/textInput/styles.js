import {color, fonts, fontSize, size} from 'theme';

export const container = () => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  backgroundColor: color.white,
});

export const row = () => ({
  flexDirection: 'row',
});

export const inputContainer = () => ({
  flex: 1,
  paddingVertical: size.moderateScale(10),
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
});
export const titleTextStyle = () => ({
  color: color.purple,
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
  marginBottom: size.moderateScale(5),
});

export const leftIconContainer = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: size.moderateScale(30),
  width: size.moderateScale(30),
  marginHorizontal: size.moderateScale(5),
});
export const rightIconContainer = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: size.moderateScale(10),
});
