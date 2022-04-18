import {size, fontSize} from 'theme';

export const container = () => ({
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  flexDirection: 'row',
});

export const btnTxt = () => ({
  paddingBottom: size.moderateScale(3),
  fontSize: fontSize.small,
});

export const svgView = () => ({
  paddingRight: size.moderateScale(5),
});
