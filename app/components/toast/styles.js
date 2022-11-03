import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  position: 'absolute',
  left: 0,
  right: 0,
  alignItems: 'center',
  zIndex: 10000,
});
export const content = () => ({
  backgroundColor: color.black,
  borderRadius: size.moderateScale(5),
  padding: size.moderateScale(10),
});
export const text = () => ({
  fontFamily: fonts.montserratRegular,
  fontSize: fontSize.verySmall,
  color: color.white,
  textTransform: 'capitalize',
});
