import {size, color} from 'theme';

export const container = () => ({
  // flex: 1,
  paddingVertical: size.moderateScale(7),
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: size.moderateScale(1),
  backgroundColor: color.lightPurple,
  borderColor: color.borderBlue,
});

export const titleTxt = () => ({
  maxHeight: size.moderateScale(35),
  fontSize: size.moderateScale(20),
  color: color.purple,
  paddingHorizontal: size.moderateScale(10),
});
