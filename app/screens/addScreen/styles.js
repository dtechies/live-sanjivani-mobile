import {color, size, fontSize, fonts} from 'theme';

export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const container = () => ({
  flex: 1,
  backgroundColor: color.white,
  paddingTop: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(15),
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const textLanding = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.dimGrey,
  fontSize: fontSize.small,
  marginBottom: size.moderateScale(10),
});
export const button = () => ({
  backgroundColor: color.dimGrey,
  padding: size.moderateScale(10),
  marginTop: size.moderateScale(5),
});
export const listView = () => ({
  backgroundColor: color.ghostWhite,
  padding: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  marginBottom: size.moderateScale(10),
  borderColor: color.gainsBoro,
});
export const categoryName = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.diGrey,
  fontSize: fontSize.medium,
  textTransform: 'capitalize',
  paddingVertical: size.moderateScale(2),
});
export const subCategoriesRow = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: size.moderateScale(1),
  paddingVertical: size.moderateScale(7),
  flex: 1,
});
export const subItemText = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.darkGrey,
  fontSize: fontSize.medium,
  textTransform: 'capitalize',
  marginLeft: size.moderateScale(5),
  flex: 1,
});
export const subItemUnitText = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.dimGrey,
  fontSize: fontSize.small,
  textTransform: 'capitalize',
});
export const subCateGoryIcon = () => ({
  height: size.moderateScale(30),
  width: size.moderateScale(30),
});
export const takeNoteView = () => [
  listView(),
  {
    marginTop: size.moderateScale(25),
  },
];
export const textTakeNot = () => [
  subItemText(),
  {
    borderBottomWidth: 0,
  },
];
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(20),
});
export const labelFieldText = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  borderColor: color.mediumGreen,
  backgroundColor: color.lightGreen,
});
export const addReminderButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  borderColor: color.dimGrey,
  backgroundColor: color.gainsBoro,
  marginVertical: size.moderateScale(10),
});
export const textAddAppointment = () => ({
  fontFamily: fonts.openSansBold,
  color: color.black,
  fontSize: fontSize.small,
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.mediumGreen,
  fontSize: fontSize.small,
});
