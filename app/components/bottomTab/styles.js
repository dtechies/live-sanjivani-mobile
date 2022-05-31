import {color, fonts, fontSize, size} from 'theme';
export const container = () => ({
  paddingHorizontal: size.moderateScale(15),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: size.moderateScale(70),
  backgroundColor: color.blueBtn,
});
export const textLabel = active => ({
  fontSize: fontSize.small,
  color: active ? color.white : color.darkGrey,
  fontFamily: fonts.latoRegular,
  textTransform: 'capitalize',
  marginTop: size.moderateScale(5),
});
export const iconView = () => ({
  alignItems: 'center',
});
