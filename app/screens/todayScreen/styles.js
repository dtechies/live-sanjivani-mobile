import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  backgroundColor: color.steelBlue,
});
export const toast = () => ({
  marginHorizontal: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(12),
});
export const textLanding = () => ({
  paddingBottom: size.moderateScale(5),
  fontFamily: fonts.latoRegular,
  color: color.white,
  fontSize: fontSize.small,
  textAlign: 'center',
});
export const textHeaderName = () => ({
  paddingTop: size.moderateScale(20),
  paddingBottom: size.moderateScale(7),
  fontFamily: fonts.latoRegular,
  color: color.white,
  fontSize: fontSize.large,
  textAlign: 'center',
});
export const textTodayProgress = () => ({
  // paddingTop: size.moderateScale(10),
  paddingBottom: size.moderateScale(7),
  fontFamily: fonts.latoBold,
  color: color.steelBlue,
  fontSize: fontSize.medium,
});
export const textTime = () => ({
  paddingLeft: size.moderateScale(7),
  fontFamily: fonts.latoRegular,
  color: color.midnightBlue,
  fontSize: fontSize.smallText,
});
export const timeStyle = () => ({
  fontFamily: fonts.latoBold,
  color: color.white,
  fontSize: fontSize.largeLogo,
});
export const timeAMStyle = () => ({
  paddingTop: size.moderateScale(5),
  fontFamily: fonts.latoBold,
  color: color.white,
  fontSize: fontSize.medium,
});
export const desTextStyle = () => ({
  // marginVertical: size.moderateScale(),
  marginVertical: size.moderateScale(5),
  fontFamily: fonts.latoRegular,
  color: color.dimGrey,
  fontSize: fontSize.verySmall,
});
export const screenContainer = () => ({
  paddingHorizontal: size.moderateScale(15),
});
export const titleTextContainer = () => ({
  paddingVertical: size.moderateScale(7),
  marginVertical: size.moderateScale(20),
});
export const medicineName = () => ({
  paddingTop: size.moderateScale(10),
  // paddingBottom: size.moderateScale(7),
  fontFamily: fonts.latoBold,
  color: color.steelBlue,
  fontSize: fontSize.medium,
});
export const tipsTxt = val => ({
  paddingTop: size.moderateScale(10),
  paddingBottom: size.moderateScale(7),
  fontFamily: val ? fonts.latoRegular : fonts.latoBold,
  color: val ? color.dimGrey : color.blueCard,
  fontSize: fontSize.medium,
});
export const tipsMain = () => ({
  backgroundColor: color.white,
  paddingHorizontal: size.moderateScale(15),
  paddingVertical: size.moderateScale(5),
  marginHorizontal: size.moderateScale(20),
  marginVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
});

export const progressView = () => ({
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20),
  borderRadius: size.moderateScale(10),
  // height: size.moderateScale(100),
  marginHorizontal: size.moderateScale(20),
  backgroundColor: color.white,
  marginVertical: size.moderateScale(10),
  marginTop: size.moderateScale(30),
  justifyContent: 'space-between',
});
export const medicationView = () => ({
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(10),
  borderRadius: size.moderateScale(10),
  // height: size.moderateScale(100),
  marginHorizontal: size.moderateScale(20),
  backgroundColor: color.white,
  marginVertical: size.moderateScale(10),
});

export const reminderText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.purple,
  width: size.moderateScale(260),
});

export const backgroundBtn = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: size.moderateScale(25),
  bottom: size.moderateScale(0),
  backgroundColor: color.lightGreen,
  right: size.moderateScale(15),
});

export const row = isFlex => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: isFlex ? 1 : 0,
});
export const rowImage = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  // justifyContent: 'space-between',
  flex: 1,
  marginTop: size.moderateScale(5),
});
export const medicationCard = () => ({
  paddingBottom: size.moderateScale(5),
});
export const onlyRow = () => ({
  paddingTop: size.moderateScale(10),
  alignItems: 'center',
  flexDirection: 'row',
  width: size.deviceWidth * 0.78,
  justifyContent: 'space-between',
});
export const labelFieldText = () => ({
  marginBottom: size.moderateScale(5),
  fontSize: fontSize.small,
  fontFamily: fonts.latoRegular,
  color: color.purple,
});

export const tipsContainer = () => ({
  marginHorizontal: size.moderateScale(20),
  marginVertical: size.moderateScale(10),
});

export const tipsSubView = () => ({
  padding: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
  borderColor: color.darkGrey,
});
export const circleBtnView = () => ({
  borderWidth: 1,
  borderColor: color.borderBlue,
  alignItems: 'center',
  justifyContent: 'center',
  width: size.moderateScale(50),
  // position: 'absolute',
  // bottom: size.moderateScale(20),
  // right: size.moderateScale(10),
  height: size.moderateScale(50),
  paddingTop: size.moderateScale(5),
  borderRadius: 100,
  zIndex: 10,
  elevation: 6,
});
export const demoView = () => ({
  position: 'absolute',
  bottom: size.moderateScale(20),
  right: size.moderateScale(10),
  // maxHeight: size.moderateScale(150),
  // maxWidth: size.moderateScale(200),
  // minWidth: size.moderateScale(50),
  // minHeight: size.moderateScale(50),
  zIndex: 10,
});
export const squadBtnView = () => ({
  borderWidth: 1,
  borderColor: color.strongBlue,
  backgroundColor: color.strongBlue,
  alignItems: 'center',
  alignSelf: 'center',
  paddingTop: size.moderateScale(2),
  justifyContent: 'center',
  width: size.moderateScale(39),
  height: size.moderateScale(20),
  borderRadius: 50,
});
export const circleView = () => ({
  height: size.moderateScale(12),
  width: size.moderateScale(12),
  backgroundColor: color.midnightBlue,
  borderRadius: size.moderateScale(50),
});
export const circleDateView = () => ({
  height: size.moderateScale(12),
  width: size.moderateScale(12),
  marginLeft: size.moderateScale(10),
  backgroundColor: color.midnightBlue,
  borderRadius: size.moderateScale(50),
});

export const separator = () => ({
  backgroundColor: color.midnightBlue,
  height: size.moderateScale(1),
});
export const textError = () => ({
  fontFamily: fonts.latoBold,
  color: color.blueCard,
  fontSize: fontSize.medium,
  paddingVertical: size.moderateScale(10),
});
export const insideUpcomingCircle = () => ({
  height: size.moderateScale(4),
  width: size.moderateScale(4),
  borderRadius: 2,
  backgroundColor: color.white,
});
export const upcomingCircle = () => ({
  height: size.moderateScale(12),
  width: size.moderateScale(12),
  borderRadius: size.moderateScale(6),
  backgroundColor: color.dimGrey,
  alignItems: 'center',
  justifyContent: 'center',
});
export const lineStyle = isDone => ({
  flex: 1,
  borderStyle: 'dashed',
  borderRadius: 0,
  borderWidth: 1,
  // borderColor: isDone ? color.blue : color.dimGrey,
  borderColor: color.dimGrey,
});
export const plusMenu = () => ({
  backgroundColor: 'white',
  position: 'absolute',
  height: size.moderateScale(150),
  width: size.moderateScale(200),
  bottom: size.moderateScale(20),
  right: size.moderateScale(10),
  borderRadius: size.moderateScale(25),
  elevation: 5,
});
