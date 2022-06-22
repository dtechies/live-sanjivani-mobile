import {size, fontSize, color, fonts} from 'theme';

export const container = () => ({
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  flexDirection: 'row',
  borderRadius: size.moderateScale(10),
  borderColor: color.blueBtn,
  backgroundColor: color.blueBtn,
});

export const btnTxt = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});

export const svgView = () => ({
  paddingRight: size.moderateScale(5),
});
