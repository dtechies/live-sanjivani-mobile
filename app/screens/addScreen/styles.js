import {color, size, fontSize, fonts} from 'theme';

export const full = () => ({
  flex: 1,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const container = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
  paddingTop: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20),
});
export const listView = () => ({
  backgroundColor: color.ghostWhite,
  padding: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  marginBottom: size.moderateScale(10),
  borderColor: color.gainsBoro,
});
export const categoryName = () => ({
  fontFamily: fonts.latoRegular,
  color: color.diGrey,
  fontSize: fontSize.medium,
  textTransform: 'capitalize',
  paddingVertical: size.moderateScale(2),
});
export const subItemText = () => ({
  fontFamily: fonts.latoRegular,
  color: color.darkGrey,
  fontSize: fontSize.medium,
  textTransform: 'capitalize',
  paddingVertical: size.moderateScale(3),
  borderBottomWidth: size.moderateScale(1),
});
export const takeNoteView = () => [
  listView(),
  {
    marginTop: size.moderateScale(1),
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
  // fontFamily: fonts.segoeUIBold,
  fontFamily: fonts.latoBold,
  color: color.blueTx,
  fontSize: fontSize.medium,
  paddingLeft: size.moderateScale(5),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  marginBottom: size.moderateScale(15),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  backgroundColor: color.blueBtn,
  marginBottom: size.moderateScale(30),
  borderColor: color.blueBtn,
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
  fontFamily: fonts.latoBold,
  color: color.black,
  fontSize: fontSize.medium,
});
export const textAddButton = () => ({
  fontFamily: fonts.latoBold,
  color: color.white,
  fontSize: fontSize.medium,
});
export const addNavStyle = val => ({
  backgroundColor: val ? color.blueBtn : color.white,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(15),
  marginBottom: size.moderateScale(5),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(2),
  shadowOffset: {height: 5, width: 0},
  shadowOpacity: 0.05,
  elevation: size.moderateScale(2),
});
export const labelAddStyle = val => ({
  fontSize: fontSize.medium,
  color: val ? color.white : color.blueTx,
  fontFamily: fonts.latoBold,
  // fontFamily: fonts.segoeUIBold,
});
export const mainCard = () => ({
  marginTop: size.moderateScale(10),
});
export const showNote = () => ({
  height: size.deviceHeight * 0.15,
  textAlignVertical: 'top',
  shadowColor: color.darkGrey,
  borderRadius: 10,
  shadowColor: color.black,
  padding: 10,
  shadowRadius: size.moderateScale(2),
  shadowOffset: {height: 5, width: 0},
  shadowOpacity: 0.05,
  elevation: size.moderateScale(2),
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginTop: -15,
  marginBottom: 15,
});
export const textAreaContainer = () => ({
  backgroundColor: 'red',
  borderColor: color.dimGrey,
  borderWidth: 1,
  // justifyContent: 'flex-start',

  padding: 5,
});
export const textArea = () => ({
  height: 150,
  // justifyContent: 'flex-start',
});
