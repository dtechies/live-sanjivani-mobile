import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const button = () => ({
  marginTop: size.deviceHeight * 0.2,
  height: size.moderateScale(40),
  backgroundColor: color.cornBlue,
});
export const dropdown = () => ({
  margin: size.moderateScale(16),
  height: size.moderateScale(50),
  width: size.deviceWidth * 0.45,
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(8),
});
export const placeholderStyle = () => ({
  alignItems: 'center',
  fontSize: size.moderateScale(15),
});
export const selectedTextStyle = () => ({
  fontSize: size.moderateScale(16),
  marginLeft: size.moderateScale(8),
});

export const buttonTxt = () => ({
  color: color.white,
});
