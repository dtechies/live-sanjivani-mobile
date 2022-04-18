import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
export const textLanding = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.mediumGreen,
  fontSize: fontSize.medium,
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
  marginVertical: size.moderateScale(20),
});

export const reminderView = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  height: size.moderateScale(50),
  width: size.deviceWidth * 0.9,
  backgroundColor: color.lightGreen,
  marginBottom: size.moderateScale(10),
});

export const reminderText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  width: size.moderateScale(260),
});

export const separator = () => ({
  height: size.moderateScale(20),
  backgroundColor: 'red',
});

export const backgroundBtn = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: size.moderateScale(25),
  bottom: size.moderateScale(0),
  backgroundColor: color.lightGreen,
  right: size.moderateScale(0),
});

export const rowBack = () => ({
  backgroundColor: 'red',
  alignItems: 'center',
});
export const labelFieldText = () => ({
  marginBottom: size.moderateScale(5),
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
});
