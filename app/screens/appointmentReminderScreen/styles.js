import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.themeBack,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const full = () => ({
  flex: 1,
  backgroundColor: color.themeBack,
});
export const separator = () => ({
  marginVertical: size.moderateScale(10),
  backgroundColor: color.grayIcon,
  height: size.moderateScale(1),
  width: size.deviceWidth * 0.65,
});
export const mainView = () => ({
  marginTop: size.moderateScale(15),
  marginBottom: size.moderateScale(15),
});
export const textDate = () => ({
  fontFamily: fonts.latoRegular,
  color: color.white,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(10),
});
export const dateMainView = () => ({
  borderRadius: size.moderateScale(5),
  backgroundColor: color.turquoise,
  paddingVertical: size.moderateScale(13),
  paddingLeft: size.moderateScale(5),
  marginTop: size.moderateScale(15),
  // marginBottom: size.moderateScale(10),
  flexDirection: 'row',
  alignItems: 'center',
});
export const timeMainView = () => ({
  backgroundColor: color.white,
  borderRadius: size.moderateScale(5),
  paddingVertical: size.moderateScale(13),
  paddingHorizontal: size.moderateScale(5),
  marginTop: size.moderateScale(7),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const textDateTitle = () => ({
  fontFamily: fonts.latoRegular,
  color: color.purple,
  fontSize: fontSize.small,
  marginBottom: size.moderateScale(5),
});
export const textTimeNameDate = () => ({
  fontFamily: fonts.latoRegular,
  paddingLeft: size.moderateScale(5),
  color: color.black,
  fontSize: fontSize.small,
});
export const textTimeDate = () => ({
  fontFamily: fonts.latoRegular,
  color: color.turquoise,
  fontSize: fontSize.small,
});
export const searchTitle = () => ({
  fontFamily: fonts.latoRegular,
  color: color.black,
  fontSize: fontSize.small,
  fontWeight: 'bold',
});
export const searchDis = () => ({
  fontFamily: fonts.latoRegular,
  color: color.black,
  fontSize: fontSize.small,
});
export const titleStyle = () => ({
  marginTop: size.moderateScale(10),
  marginHorizontal: size.moderateScale(30),
});
export const crossSvgStyle = () => ({
  alignSelf: 'flex-end',
  padding: size.moderateScale(13),
  paddingBottom: size.moderateScale(10),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.89,
  alignSelf: 'center',
  backgroundColor: color.blueBtn,
  marginVertical: size.moderateScale(10),
});
export const btnModel = () => ({
  marginTop: size.moderateScale(15),
  width: size.deviceWidth * 0.3,
  alignSelf: 'center',
  borderColor: color.turquoise,
  backgroundColor: color.turquoise,
  borderRadius: size.moderateScale(5),
  marginBottom: size.moderateScale(10),
});
export const textAddButton = () => ({
  fontFamily: fonts.latoRegular,
  color: color.white,
  fontSize: fontSize.small,
});
export const dataPickerStyle = () => ({
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  shadowColor: color.black,
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.5,
  shadowRadius: 1,
  elevation: size.moderateScale(5),
});
export const selectedDateContainerStyle = () => ({
  height: size.moderateScale(30),
  width: size.moderateScale(30),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.turquoise,
  borderRadius: size.moderateScale(100),
});
export const selectedDateStyle = () => ({
  fontWeight: 'bold',
  color: color.white,
});
export const inputMain = () => ({
  width: size.deviceWidth * 0.89,
  // marginBottom: size.moderateScale(15),
  marginTop: size.moderateScale(10),
});
export const inputTxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.black,
});
export const searchPlacesInputTxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.black,
  width: size.deviceWidth * 0.77,
  marginRight: size.moderateScale(15),
});
export const searchPlacesTxt = () => ({
  justifyContent: 'center',
  paddingLeft: size.moderateScale(15),
  paddingVertical: 0,
  paddingHorizontal: 0,
  overflow: 'hidden',
  paddingBottom: 0,
  flex: 1,
  flexDirection: 'row',
  // alignItems: 'center',
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  marginTop: size.moderateScale(10),
});
export const txtConfirm = () => ({
  paddingTop: size.moderateScale(5),
  fontSize: fontSize.mediumLargeSec,
  fontFamily: fonts.latoBold,
  color: color.headerBlue,
});
export const txtDoctor = () => ({
  paddingBottom: size.moderateScale(10),
  paddingTop: size.moderateScale(20),
  fontSize: fontSize.medium,
  fontFamily: fonts.latoBold,
  color: color.black,
});
export const txtDate = () => ({
  // paddingTop: size.moderateScale(10),
  fontSize: fontSize.largeNew,
  fontFamily: fonts.latoRegular,
  color: color.black,
  // backgroundColor: 'red',
});
export const txtDate1 = () => ({
  paddingTop: size.moderateScale(5),
  fontSize: fontSize.veryLarge,
  fontFamily: fonts.latoBold,
  color: color.black,
});
export const txtBegin = () => ({
  paddingTop: size.moderateScale(5),
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.dimGrey,
});
export const modalStyle = () => ({
  alignSelf: 'center',
  backgroundColor: 'transparent',
  shadowColor: 'transparent',
  marginTop: size.deviceHeight * 0.3,
  width: size.deviceWidth * 0.75,
  borderRadius: size.moderateScale(10),
});
export const modelize_view = () => ({
  alignItems: 'center',
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  paddingBottom: size.moderateScale(12),
});
export const calenderMain_view = () => ({
  borderRadius: size.moderateScale(10),
});
export const textValidation = () => ({
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.verySmall,
  color: color.red,
});
export const searchedValueList = () => ({
  marginTop: 2,
  paddingVertical: size.moderateScale(10),
  borderColor: color.white,
  borderWidth: size.moderateScale(1),
  paddingHorizontal: size.moderateScale(15),
  backgroundColor: color.white,
  borderRadius: 10,
});
export const googleStyle = () => ({
  textInputContainer: {
    backgroundColor: color.white,
    // paddingLeft: 15,
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderColor: color.black,
    overflow: 'hidden',
    paddingBottom: 0,
    justifyContent: 'center',
    zIndex: 20,
    color: 'black',
  },
  textInput: {
    flex: 2,
    // color: color.black,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    padding: 0,
    marginBottom: 0,
    alignSelf: 'center',
    color: 'black',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  description: {
    color: 'black',
  },
});
