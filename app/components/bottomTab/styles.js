import {color, fonts, fontSize, size} from 'theme';
export const container = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: size.moderateScale(70),
  backgroundColor: color.blueBtn,
});
export const textLabel = active => ({
  fontSize: fontSize.small,
  color: active ? color.white : color.darkGrey,
  fontFamily: fonts.latoRegular,
  textTransform: 'capitalize',
  marginTop: size.moderateScale(5),
});
export const iconClick = () => ({
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});
