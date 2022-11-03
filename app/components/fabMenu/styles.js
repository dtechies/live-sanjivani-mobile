import {color, size, fontSize, fonts} from 'theme';

export const iosShadow = {
  shadowColor: '#171717',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.4,
  shadowRadius: 2,
};
export const circleBtnView = buttonColor => ({
  // borderWidth: 1,
  borderColor: color.borderBlue,
  alignItems: 'center',
  justifyContent: 'center',
  width: size.moderateScale(50),
  height: size.moderateScale(50),
  // paddingTop: size.moderateScale(5),
  borderRadius: 100,
  zIndex: 10,
  elevation: 6,
  backgroundColor: buttonColor ? buttonColor : color.borderBlue,
});
export const circleBtn = (spin, buttonColor) => ({
  borderWidth: 1,
  borderColor: buttonColor ? color.borderBlue : '#077dcb',
  alignItems: 'center',
  justifyContent: 'center',
  width: size.moderateScale(50),
  position: 'absolute',
  bottom: size.moderateScale(10),
  right: size.moderateScale(10),
  height: size.moderateScale(50),
  paddingTop: size.moderateScale(5),
  borderRadius: 100,
  zIndex: 10,
  elevation: 6,
  transform: [
    {
      rotate: spin,
    },
  ],
  ...iosShadow,
});
export const buttonsContainer = translate2X => ({
  position: 'absolute',
  bottom: size.moderateScale(10),
  right: size.moderateScale(10),
  zIndex: 10,
  flexDirection: 'row',
  transform: [
    {
      translateY: translate2X,
    },
  ],
  ...iosShadow,
});
export const labelScale = scaleX => ({
  position: 'absolute',
  bottom: size.moderateScale(13),
  right: size.moderateScale(52),
  opacity: scaleX,
  backgroundColor: 'white',
  padding: size.moderateScale(5),
  borderRadius: size.moderateScale(5),
  elevation: 10,
  ...iosShadow,
});
export const labelText = () => ({
  textShadowRadius: 20,
  fontFamily: fonts.latoBold,
  color: color.steelBlue,
  fontSize: fontSize.medium,
  borderColor: 'red',
  textShadowColor: 'white',
  // textShadowOffset: {width: 100, height: 10},
});
export const demoView = () => ({
  position: 'absolute',
  bottom: size.moderateScale(20),
  right: size.moderateScale(10),
  alignItems: 'flex-end',
  zIndex: 10,
  backgroundColor: 'red',
});
export const plusMenu = ({translateX, translateY, scaleX, scaleY}) => ({
  backgroundColor: 'white',
  position: 'absolute',
  height: size.moderateScale(150),
  width: size.moderateScale(200),
  bottom: size.moderateScale(20),
  right: size.moderateScale(10),
  borderRadius: size.moderateScale(25),
  elevation: 5,
  transform: [
    {scaleX: 1},
    {scaleY: 1},
    {translateX: translateX},
    {translateY: translateY},
  ],
});
