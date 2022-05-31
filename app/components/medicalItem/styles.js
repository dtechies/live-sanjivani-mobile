import {size, fontSize, color, fonts} from 'theme';

export const container = () => ({
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: size.moderateScale(100),
  width: size.deviceWidth * 0.49,
  // margin: size.moderateScale(1),
  paddingHorizontal: size.moderateScale(7),
  borderColor: color.darkGrey,
  paddingVertical: size.moderateScale(7),
  backgroundColor: color.lavender,
});

export const TextFirstTxt = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
});
export const TextSecondTxt = () => ({
  fontSize: fontSize.VerySmall,
  fontFamily: fonts.latoRegular,
});

export const svgView = () => ({
  paddingRight: size.moderateScale(5),
});
export const stretch = () => ({
  width: size.moderateScale(15),
  height: size.moderateScale(15),
});
export const flexOne = () => ({
  flex: 1,
  alignSelf: 'flex-end',
});
export const centerView = () => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 3,
});
export const centerLeftView = () => ({
  flex: 1,
  paddingLeft: size.moderateScale(5),
});
export const flexDirectionStyle = () => ({
  flexDirection: 'row',
  // paddingLeft: size.moderateScale(20),
});
export const centerRightView = () => ({
  // backgroundColor: 'red',
  justifyContent: 'center',
  paddingLeft: size.moderateScale(10),
  flex: 4,
});
