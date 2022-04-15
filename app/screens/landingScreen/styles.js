import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
export const textLanding = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.mediumGreen,
  fontSize: fontSize.medium,
});
export const text = () => ({
  fontFamily: fonts.openSansBold,
  color: color.dimGrey,
  fontSize: fontSize.medium,
});
export const button = () => ({
  backgroundColor: color.dimGrey,
  padding: size.moderateScale(10),
  marginTop: size.moderateScale(5),
});
