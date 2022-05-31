import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  // justifyContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'red',
  // marginHorizontal: size.moderateScale(10),
  backgroundColor: color.themeBack,
});
export const textLanding = () => ({
  color: color.mediumGreen,
  fontSize: fontSize.small,
  fontFamily: fonts.segoeUI,
});
export const textdwmy = (isSelected, index) => ({
  color: color.black,
  fontSize: fontSize.small,
  fontFamily: fonts.segoeUI,
  backgroundColor: isSelected === index ? color.white : null,
  marginVertical: size.moderateScale(5),
  paddingVertical: size.moderateScale(4),
  paddingHorizontal: size.moderateScale(15),
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: -15, width: 0},
  shadowOpacity: 0.4,
  elevation: isSelected === index ? size.moderateScale(10) : 0,
});
export const button = () => ({
  // backgroundColor: color.blueBtn,
  // padding: size.moderateScale(10),
  width: size.deviceWidth * 0.9,
  marginTop: size.moderateScale(10),
});
export const btnAppointmentTime = () => ({
  // backgroundColor: color.blueBtn,
  // padding: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(0),
  paddingVertical: size.moderateScale(0),
  width: size.deviceWidth * 0.2,
  height: size.moderateScale(25),
  borderRadius: size.moderateScale(5),
  // marginTop: size.moderateScale(10),
});
export const buttonCircle = () => ({
  // backgroundColor: color.blueBtn,
  // padding: size.moderateScale(10),
  width: size.deviceWidth * 0.11,
  marginTop: size.moderateScale(10),
});
export const buttonTxt = () => ({
  color: color.white,
});
export const btnAppointmentTimeTxt = () => ({
  color: color.white,
  fontSize: fontSize.smallText,
});
export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontWeight: 'bold',
  color: color.blueTx,
});
export const labelAppointmentTime = () => ({
  fontSize: fontSize.smallText,
  color: color.black,
  borderWidth: size.moderateScale(1),
  borderRadius: size.moderateScale(5),
  borderColor: color.lavender,
  textAlign: 'center',
  paddingHorizontal: size.moderateScale(5),
  paddingVertical: size.moderateScale(2),
});
export const labelAppointmentDate = () => ({
  fontSize: fontSize.small,
  color: color.black,
  fontFamily: fonts.latoBold,
  // textAlign: 'center',
});
export const labelAppointmentSlots = () => ({
  fontSize: fontSize.smallText,
  color: color.dimGrey,
  fontFamily: fonts.latoRegular,
  paddingVertical: size.moderateScale(8),
  // textAlign: 'center',
});
export const labelAddStyle = (isSelectedCard, index) => ({
  fontSize: fontSize.medium,
  color: isSelectedCard === index ? color.white : color.dimGrey,
  fontFamily: fonts.latoBold,
  // paddingBottom: size.moderateScale(5),
});
export const profileText = () => ({
  fontSize: fontSize.small,
  fontWeight: 'bold',
  color: color.blueTx,
  textAlign: 'center',
  paddingTop: size.moderateScale(5),
});
export const dropdown = () => ({
  marginVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  borderRadius: size.moderateScale(10),
  paddingVertical: size.moderateScale(5),
  backgroundColor: color.white,
});

export const selectedOptionTextStyle = () => ({
  fontWeight: 'bold',
  color: color.blueTx,
});
export const separator = () => ({
  backgroundColor: color.lightPurple,
  height: size.moderateScale(1),
  // marginVertical: size.moderateScale(15),
});
export const InsideLabelFieldText = () => ({
  fontSize: fontSize.small,
  fontWeight: 'bold',
  color: color.blueTx,
  paddingVertical: size.moderateScale(5),
  paddingLeft: size.moderateScale(10),
});
export const dropdownContainer = () => ({
  borderRadius: size.moderateScale(10),
});
export const mainProfileStyle = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: size.moderateScale(40),
});
export const mainDWMYStyle = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: size.moderateScale(10),
  marginHorizontal: size.moderateScale(20),
  marginVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(8),
  // paddingVertical: size.moderateScale(5),
  backgroundColor: color.lavender,
});
export const subProfileStyle = () => ({
  backgroundColor: color.white,
  height: size.moderateScale(120),
  width: size.moderateScale(120),
  borderRadius: size.moderateScale(10),
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: size.moderateScale(10),
});
export const MedicalItemsStyle = () => ({
  backgroundColor: color.white,
  // height: size.moderateScale(120),
  width: size.moderateScale(150),
  borderRadius: size.moderateScale(10),
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: size.moderateScale(10),
});

export const OneCenter_view = () => ({
  marginTop: size.deviceHeight * 0.1,
  height: size.moderateScale(50),
  width: size.moderateScale(50),
  marginLeft: size.moderateScale(10),
  shadowColor: color.black,
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: size.moderateScale(6),
  backgroundColor: color.white,
  justifyContent: 'center',
});

export const FourCenter_txt = () => ({
  fontSize: size.moderateScale(35),
  alignSelf: 'center',
  // fontFamily: fonts.Light,
  color: color.black,
});

export const FourCenter_view = () => ({
  flexDirection: 'row',
});
export const subTimeContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
export const mainTimeContainer = () => ({
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(12),
  paddingBottom: size.moderateScale(12),
  paddingVertical: size.moderateScale(10),
  // justifyContent: 'center',
  borderRadius: size.moderateScale(5),
  width: size.deviceWidth * 0.6,
});
export const addNavStyle = (isSelectedCard, index) => ({
  backgroundColor: isSelectedCard === index ? color.blueBtn : color.white,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(10),
  marginHorizontal: size.moderateScale(10),
  paddingVertical: size.moderateScale(10),
  marginBottom: size.moderateScale(5),
});
