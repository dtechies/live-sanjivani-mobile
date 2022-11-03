import {color, fontSize, size, fonts} from 'theme';

export const containerMain = val => ({
  // height:
  //   val == 1
  //     ? size.deviceHeight * 0.27
  //     : val == 2
  //     ? size.deviceHeight * 0.3
  //     : size.deviceHeight * 0.09,
  // paddingHorizontal: size.moderateScale(20),
  // paddingVertical: size.moderateScale(25),
  justifyContent: 'center',
});
export const backMain = (val, ss) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: val == 3 ? 'space-between' : 'flex-start',
  marginTop: val == 3 ? size.moderateScale(20) : 0,
  height: ss ? 0 : size.moderateScale(58),
});
export const profileInfoMain = val => ({
  marginTop:
    val == 1
      ? size.moderateScale(40)
      : val == 2
      ? size.moderateScale(10)
      : val == 3
      ? size.moderateScale(20)
      : 0,
  marginLeft: val == 3 ? size.moderateScale(20) : 0,
  flexDirection: val == 2 ? 'column' : 'row',
  alignItems: 'center',
  justifyContent: val == 2 ? 'center' : 'flex-start',
});
export const leftIconDes = val => ({
  paddingLeft: size.moderateScale(20),
  paddingVertical: size.moderateScale(25),
});

export const profileInfo = val => ({
  paddingHorizontal: val == 4 ? 0 : size.moderateScale(15),
  marginTop:
    val == 2
      ? size.moderateScale(18)
      : val == 3
      ? size.moderateScale(0)
      : size.moderateScale(20),
  alignItems: val == 2 || val == 3 || val == 4 ? 'center' : 'flex-start',
  marginLeft:
    val == 4 ? 0 : val == 3 ? size.moderateScale(1) : size.moderateScale(18),
  marginBottom: val == 4 ? size.moderateScale(20) : 0,
});
export const profileInfo1 = val => ({
  paddingHorizontal: val == 4 ? 0 : size.moderateScale(15),
  marginTop:
    val == 2 ? size.moderateScale(5) : val == 3 ? size.moderateScale(5) : 0,
  alignItems: val == 2 || val == 3 || val == 4 ? 'center' : 'flex-start',
  marginLeft:
    val == 4 ? 0 : val == 3 ? size.moderateScale(1) : size.moderateScale(0),
  marginBottom: size.moderateScale(20),
});
export const propInfo = () => ({
  marginBottom: size.moderateScale(10),
});
export const profileName = (val, isProgress) => ({
  fontSize: isProgress ? fontSize.small : fontSize.medium,
  fontFamily: fonts.latoRegular,
  color: val == 1 ? color.white : color.black,
});
export const profileDetails = val => ({
  fontSize: fontSize.medium,
  color: val == 1 ? color.white : color.blue,
  fontFamily: fonts.latoRegular,
});
export const imgMain = val => ({
  // shadowRadius: size.moderateScale(5),
  // shadowOffset: {height: -10, width: 0},
  // shadowOpacity: 0.4,
  // elevation: size.moderateScale(10),
  marginTop:
    val == 3
      ? size.moderateScale(15)
      : val == 1
      ? size.moderateScale(7)
      : val == 2
      ? size.moderateScale(8)
      : 0,
  alignSelf: 'center',
  overflow: 'hidden',
  backgroundColor: 'rgb(225, 225, 225)',
  borderRadius: size.moderateScale(100),
  borderWidth: val == 1 || val == 3 ? 8 : 1,
  borderColor: val == 1 || val == 3 ? 'rgb(225, 225, 225)' : 'red',
});
export const imgSize = val => ({
  width:
    val == 1
      ? size.moderateScale(90)
      : val == 2
      ? size.moderateScale(75)
      : size.moderateScale(102),
  height:
    val == 1
      ? size.moderateScale(90)
      : val == 2
      ? size.moderateScale(75)
      : size.moderateScale(102),
  borderRadius: val == 1 ? 0 : size.moderateScale(100),
});
