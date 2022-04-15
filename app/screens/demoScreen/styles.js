import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
export const textLanding = () => ({
  color: color.mediumGreen,
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  fontFamily: fonts.openSansBold,
  fontFamily: fonts.openSansMedium,
});
export const button = () => ({
  backgroundColor: color.dimGrey,
  padding: size.moderateScale(10),
  marginTop: size.moderateScale(10),
});
