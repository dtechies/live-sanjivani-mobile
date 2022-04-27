import {color, size, fontSize, fonts} from 'theme';

export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const container = () => ({
  flex: 1,
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(20),
  paddingTop: size.moderateScale(5),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const titleStyle = () => ({
  marginHorizontal: size.moderateScale(20),
  marginTop: size.moderateScale(10),
});
export const textValidation = () => ({
  fontFamily: fonts.openSansRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
});
export const inputMainContainer = () => ({
  marginVertical: size.moderateScale(8),
});
export const labelFieldText = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const journalDescriptionInputStyle = () => [
  labelFieldText(),
  {
    minHeight: size.moderateScale(100),
  },
];
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  marginTop: size.moderateScale(10),
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
  alignSelf: 'center',
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
export const textJournalTitle = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.dimGrey,
  fontSize: fontSize.medium,
  marginTop: size.moderateScale(5),
});

// Modal styles

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
export const timeAndEditIconRow = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
export const textTime = () => ({
  fontFamily: fonts.openSansBold,
  color: color.dimGrey,
  fontSize: fontSize.medium,
  marginVertical: size.moderateScale(10),
  marginRight: size.moderateScale(5),
  textAlign: 'center',
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
export const imageStyle = () => ({
  height: size.moderateScale(150),
  width: size.moderateScale(150),
  borderRadius: size.moderateScale(5),
  alignSelf: 'center',
});
