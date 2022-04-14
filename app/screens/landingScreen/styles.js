import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
export const textLanding = () => ({
  // fontFamily: fonts.openSansRegular,
  color: color.mediumGreen,
  // fontFamily: fonts.openSansBold,
  fontFamily: fonts.openSansMedium,
  // fontSize: fontSize.verySmall,
  // fontSize: fontSize.small,
  fontSize: fontSize.medium,
});
