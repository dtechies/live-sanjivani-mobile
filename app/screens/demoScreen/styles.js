import {color, size, fonts, fontSize} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.themeBack,
});

//  Input style....
export const inputMain = () => ({
  width: size.deviceWidth * 0.9,
  margin: size.moderateScale(10),
});
export const button = () => ({
  fontSize: fontSize.small,
  // fontFamily: fonts.openSansRegular,
  color: color.darkGrey,
});

// toggle button style
export const mainReminder = () => ({
  width: size.deviceWidth * 0.9,
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: size.moderateScale(1),
  borderColor: color.themeBack,
  backgroundColor: color.themeBack,
  borderRadius: size.moderateScale(5),
  marginTop: size.moderateScale(20),
  paddingVertical: size.moderateScale(10),
  backgroundColor: color.white,
});
export const reminderView = isActive => ({
  paddingHorizontal: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
  height: size.moderateScale(40),
  marginHorizontal: size.moderateScale(5),
  backgroundColor: isActive ? color.themeBack : color.themeBack,
  marginBottom: size.moderateScale(10),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const subMain = () => ({
  flex: 1,
  alignItems: 'center',
  flexDirection: 'row',
});
export const timeTxt = () => ({
  marginLeft: size.moderateScale(10),
  fontSize: fontSize.verySmall,
  color: color.blue,
});
export const dateTxt = () => ({
  marginLeft: size.moderateScale(20),
  fontSize: fontSize.verySmall,
  color: color.blue,
});
export const separator = () => ({
  height: size.moderateScale(20),
});

// card
export const cardMain = val => ({
  width: size.deviceWidth * 0.95,
  borderWidth: size.moderateScale(1),
  borderColor: color.themeBack,
  // backgroundColor: color.themeBack,
  borderRadius: size.moderateScale(5),
  marginTop: size.moderateScale(5),
  paddingVertical: size.moderateScale(8),
  backgroundColor: val ? color.blueLightDark : color.white,
});
export const cardFirst = () => ({
  alignItems: 'center',
  flexDirection: 'row',
  marginLeft: size.moderateScale(20),
});
export const cardHeading = val => ({
  marginLeft: size.moderateScale(7),
  color: val ? color.darkBlue : color.blueLight,
  fontSize: fontSize.verySmall,
});
export const cardText = val => ({
  marginLeft: size.moderateScale(40),
  marginTop: size.moderateScale(10),
  fontSize: fontSize.verySmall,
  color: val ? color.darkBlue : '',
});

export const labelFieldText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.openSansRegular,
  color: color.purple,
});

// otp styles.....
export const otpMain = () => ({
  width: size.deviceWidth * 0.9,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(20),
  borderWidth: size.moderateScale(2),
  borderColor: color.white,
  backgroundColor: color.white,
  borderRadius: size.moderateScale(10),
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(-10), width: 0},
  shadowOpacity: 0.4,
  elevation: size.moderateScale(5),
});
export const otpSub = () => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  paddingBottom: size.moderateScale(10),
});
export const otpInput = () => ({
  borderBottomWidth: size.moderateScale(1),
  borderBottomColor: 'gray',
  marginHorizontal: size.moderateScale(8),
  backgroundColor: 'white',
  // height: size.moderateScale(30),
  textAlign: 'center',
  width: size.moderateScale(35),
  fontSize: fontSize.mediumSec,
  paddingBottom: size.moderateScale(-0.4),
});

//card last
export const cardDesign = () => ({
  width: size.deviceWidth * 0.9,
  borderWidth: size.moderateScale(1),
  borderColor: color.themeBack,
  flexDirection: 'row',
  alignItems: 'center',
  // backgroundColor: color.themeBack,
  borderRadius: size.moderateScale(5),
  marginTop: size.moderateScale(5),
  paddingVertical: size.moderateScale(10),
  backgroundColor: color.white,
  shadowColor: color.black,
  shadowRadius: size.moderateScale(5),
  shadowOffset: {height: size.moderateScale(-10), width: 0},
  shadowOpacity: 0.4,
  elevation: size.moderateScale(5),
  marginBottom: size.moderateScale(10),
});
export const dotImg = val => ({
  width: size.deviceWidth * 0.04,
  height: size.deviceHeight * 0.021,
  borderWidth: 1,
  borderColor: color.blue,
  borderRadius: size.moderateScale(100),
  backgroundColor: val ? color.blue : color.white,
  marginLeft: size.moderateScale(15),
  marginRight: size.moderateScale(10),
});
export const cardTxt = () => ({
  fontSize: fontSize.small,
  color: color.darkBlue,
});
// export const buttonCircle = () => ({
//   // backgroundColor: color.blueBtn,
//   // padding: size.moderateScale(10),
//   width: size.deviceWidth * 0.11,
//   marginTop: size.moderateScale(10),
// });
// export const buttonTxt = () => ({
//   color: color.white,
// });
// export const labelFieldText = () => ({
//   fontSize: fontSize.small,
//   fontWeight: 'bold',
//   color: color.blueTx,
// });
// export const profileText = () => ({
//   fontSize: fontSize.small,
//   fontWeight: 'bold',
//   color: color.blueTx,
//   textAlign: 'center',
//   paddingTop: size.moderateScale(5),
// });
// export const dropdown = () => ({
//   marginVertical: size.moderateScale(10),
//   paddingHorizontal: size.moderateScale(5),
//   borderWidth: size.moderateScale(2),
//   borderColor: color.white,
//   borderRadius: size.moderateScale(10),
//   paddingVertical: size.moderateScale(5),
//   backgroundColor: color.white,
// });

// export const selectedOptionTextStyle = () => ({
//   fontWeight: 'bold',
//   color: color.blueTx,
// });
// export const separator = () => ({
//   backgroundColor: color.lightPurple,
//   height: size.moderateScale(1),
//   // marginVertical: size.moderateScale(15),
// });
// export const InsideLabelFieldText = () => ({
//   fontSize: fontSize.small,
//   fontWeight: 'bold',
//   color: color.blueTx,
//   paddingVertical: size.moderateScale(5),
//   paddingLeft: size.moderateScale(10),
// });
// export const dropdownContainer = () => ({
//   borderRadius: size.moderateScale(10),
// });
// export const mainProfileStyle = () => ({
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
//   paddingHorizontal: size.moderateScale(40),
// });
// export const mainDWMYStyle = () => ({
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
//   paddingHorizontal: size.moderateScale(10),
//   marginHorizontal: size.moderateScale(20),
//   borderRadius: size.moderateScale(8),
//   // paddingVertical: size.moderateScale(5),
//   backgroundColor: color.lavender,
// });
// export const subProfileStyle = () => ({
//   backgroundColor: color.white,
//   height: size.moderateScale(120),
//   width: size.moderateScale(120),
//   borderRadius: size.moderateScale(10),
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginBottom: size.moderateScale(10),
// });
// export const MedicalItemsStyle = () => ({
//   backgroundColor: color.white,
//   // height: size.moderateScale(120),
//   width: size.moderateScale(150),
//   borderRadius: size.moderateScale(10),
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginBottom: size.moderateScale(10),
// });

// export const OneCenter_view = () => ({
//   marginTop: size.deviceHeight * 0.1,
//   height: size.moderateScale(50),
//   width: size.moderateScale(50),
//   marginLeft: size.moderateScale(10),
//   shadowColor: color.black,
//   shadowOffset: {width: 1, height: 1},
//   shadowOpacity: 0.8,
//   shadowRadius: 1,
//   elevation: 6,
//   backgroundColor: color.white,
//   justifyContent: 'center',
// });

// export const FourCenter_txt = () => ({
//   fontSize: size.moderateScale(35),
//   alignSelf: 'center',
//   // fontFamily: fonts.Light,
//   color: color.black,
// });

// export const FourCenter_view = () => ({
//   flexDirection: 'row',
// });
