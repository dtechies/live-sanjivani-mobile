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
});
export const inputStyle = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  paddingLeft: size.moderateScale(5),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const textValidation = () => ({
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
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
export const textInputTitle = () => ({
  fontFamily: fonts.openSansBold,
  color: color.purple,
  fontSize: fontSize.small,
});
export const textDate = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  marginBottom: size.moderateScale(5),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
  marginVertical: size.moderateScale(15),
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
export const uploadImageButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth - size.moderateScale(40),
  alignSelf: 'center',
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
  marginVertical: size.moderateScale(15),
});
export const textUploadImage = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
export const searchedValueList = () => ({
  backgroundColor: color.gainsBoro,
  paddingVertical: size.moderateScale(15),
  borderColor: color.purple,
  borderWidth: size.moderateScale(1),
  paddingHorizontal: size.moderateScale(5),
});

// modal style

export const modalContentContainerStyle = () => ({
  marginBottom: size.moderateScale(15),
});
export const dragStyle = () => ({
  backgroundColor: color.transparent,
});
export const modalStyle = () => ({
  borderTopLeftRadius: size.moderateScale(15),
  borderTopRightRadius: size.moderateScale(15),
  paddingTop: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.white,
});
export const submitButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.9,
  marginVertical: size.moderateScale(10),
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
  alignSelf: 'center',
});
export const textSubmitButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
