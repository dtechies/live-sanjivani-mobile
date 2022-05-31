import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const row = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
});
export const listViewStyle = () => ({
  marginVertical: size.moderateScale(1),
  marginLeft: size.moderateScale(2),
});
export const button = () => ({
  width: size.deviceWidth * 0.9,
  alignSelf: 'center',
  marginBottom: size.moderateScale(5),
});
export const buttonTxt = () => ({
  color: color.white,
  fontFamily: fonts.latoBold,
  fontSize: fontSize.medium,
});
