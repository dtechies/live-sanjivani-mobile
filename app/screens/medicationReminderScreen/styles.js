import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  paddingTop: size.moderateScale(20),
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  //   fontWeight: 'bold',
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  //   fontWeight: 'bold',
  paddingLeft: size.moderateScale(5),
});

export const dropdown = () => ({
  marginVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.purple,
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});

export const selectedOptionTextStyle = () => ({
  fontWeight: 'bold',
});

export const dropdownContainer = () => ({
  backgroundColor: color.lavender,
});
export const inputMainContainer = () => ({
  marginVertical: size.moderateScale(10),
});
