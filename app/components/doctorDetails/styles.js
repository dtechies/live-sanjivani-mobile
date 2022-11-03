import {color, fonts, fontSize, size} from 'theme';

export const container = isSelected => ({
  width: size.deviceWidth * 0.9,
  flexDirection: 'row',
  backgroundColor: color.themeBack,
  borderBottom: !isSelected ? size.moderateScale(20) : 0,
  borderBottomColor: color.borderLight,
  borderBottomWidth: !isSelected ? 1 : 0,
  paddingVertical: size.moderateScale(20),
});
export const textMain = () => ({
  paddingHorizontal: size.moderateScale(12),
});
export const moreDetails = () => ({
  flex: 1,
  alignItems: 'flex-end',
});
export const docName = isSelected => ({
  fontSize: isSelected ? fontSize.medium : fontSize.small,
  color: color.black,
  fontFamily: fonts.latoBold,
  paddingBottom: isSelected ? size.moderateScale(7) : 0,
});
export const docDetails = (isSelected, isSpace) => ({
  fontSize: isSelected ? fontSize.small : fontSize.verySmall,
  paddingBottom: isSelected && isSpace ? 7 : !isSelected ? 0 : 3,
});
export const ratingMain = () => ({
  flexDirection: 'row',
  alignItems: 'center',
});
