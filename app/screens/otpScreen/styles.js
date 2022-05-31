import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: color.themeBack,
});
export const imageView = () => ({
  marginTop: size.moderateScale(70),
  marginLeft: size.moderateScale(20),
  marginBottom: size.moderateScale(30),
  alignItems: 'center',
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});

export const headingMain = () => ({
  alignItems: 'center',
});
export const firstHeadingTxt = () => ({
  fontSize: fontSize.veryLarge,
  fontFamily: fonts.latoBold,
  color: color.blue,
});
export const subHeadingTxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.grayTxt,
  marginVertical: size.moderateScale(10),
});
export const optMain1 = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
export const labelEnterOtp = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.darkBlue,
  marginLeft: size.moderateScale(10),
});
export const labelWait = () => ({
  fontSize: fontSize.smallText,
  fontFamily: fonts.latoRegular,
  color: color.darkBlue,
});

export const btnRegister = val => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.01,
  width: size.deviceWidth * 0.51,
  backgroundColor: val ? color.grayTxt : color.blueBtn,
  borderColor: val ? color.grayTxt : color.blueBtn,
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: size.moderateScale(2),
  elevation: size.moderateScale(3),
});
export const btnWait = val => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: size.deviceHeight * 0.01,
  width: size.deviceWidth * 0.35,
  backgroundColor: val ? color.grayTxt : color.blueBtn,
  borderColor: val ? color.grayTxt : color.blueBtn,
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  height: size.deviceHeight * 0.058,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  shadowRadius: size.moderateScale(2),
  elevation: size.moderateScale(3),
  marginRight: size.moderateScale(3),
});
export const btnContinue = val => ({
  alignSelf: 'center',
  marginVertical: size.deviceHeight * 0.02,
  width: size.deviceWidth * 0.89,
  backgroundColor: val ? color.grayTxt : color.blueBtn,
  borderColor: val ? color.grayTxt : color.blueBtn,
  borderRadius: size.moderateScale(5),
  shadowColor: color.black,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(3),
  marginBottom: size.moderateScale(25),
});

export const btnContinueTxt = () => ({
  color: color.white,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});
export const btnRegisterTxt = () => ({
  color: color.white,
  fontSize: fontSize.medium,
  fontFamily: fonts.latoRegular,
});

// otp styles.....
export const optMain = () => ({
  // width: size.deviceWidth * 0.9,
  // height: size.deviceHeight * 0.0,
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20),
  backgroundColor: color.white,
  borderRadius: size.moderateScale(7),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(5), width: 0},
  shadowOpacity: 0.2,
  elevation: size.moderateScale(3),
  margin: 0,
  marginBottom: size.moderateScale(5),
});
export const otpSub = () => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
});
export const otpInput = () => ({
  borderBottomWidth: size.moderateScale(1),
  borderBottomColor: color.grayIcon,
  marginHorizontal: size.moderateScale(8),
  textAlign: 'center',
  width: size.moderateScale(35),
  height: size.moderateScale(25),
  fontSize: size.moderateScale(15),
  color: color.blueTx,
  padding: 0,
  margin: 0,
});
export const errorText = val => ({
  color: color.red,
  fontFamily: fonts.latoRegular,
  fontSize: fontSize.small,
  marginLeft: 5,
  marginBottom: 5,
});
