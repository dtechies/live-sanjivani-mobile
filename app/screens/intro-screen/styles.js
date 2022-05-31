import {StyleSheet} from 'react-native';
import {color, size, fonts, fontSize} from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: color.themeBack,
  },
  welcomeTextView: {
    marginTop: size.moderateScale(40),
    width: size.deviceWidth,
  },
  headingMain: {
    alignItems: 'center',
  },
  welcomeTextMain: {
    marginTop: size.moderateScale(10),
    fontFamily: fonts.pollerOne,
    fontSize: fontSize.largeLogo,
    color: color.blue,
    textAlign: 'center',
  },
  welcomeText: {
    fontFamily: fonts.segoeUI,
    fontSize: fontSize.large,
    color: color.blue,
    textAlign: 'center',
    paddingTop: size.moderateScale(5),
  },
  welcomeTextSub: {
    fontFamily: fonts.latoBold,
    fontSize: fontSize.veryLarge,
    color: color.blue,
    textAlign: 'center',
    marginHorizontal: size.moderateScale(75),
    paddingTop: size.moderateScale(15),
    marginBottom: size.moderateScale(15),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: size.moderateScale(15),
    paddingHorizontal: size.moderateScale(15),
    alignItems: 'center',
  },
  footerDot: {
    borderColor: color.darkWhite,
    borderRadius: size.moderateScale(50),
    padding: size.moderateScale(4),
    width: size.moderateScale(8),
    height: size.moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    margin: size.moderateScale(5),
  },
  dotsView: {
    flexDirection: 'row',
  },
  logoBack: {
    flex: 1,
    position: 'absolute',
    zIndex: 0,
    marginLeft: size.moderateScale(30),
    marginTop: size.moderateScale(-7),
    width: size.deviceWidth * 2.95,
    opacity: 1,
  },
  introImg: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dotSelected: {
    borderRadius: size.moderateScale(50),
    padding: size.moderateScale(4),
    width: size.moderateScale(5),
    height: size.moderateScale(5),
  },
  buttonStyle: {
    borderWidth: 0,
    backgroundColor: color.themeBack,
  },
  buttonText: {
    color: color.blue,
    fontFamily: fonts.latoRegular,
    fontSize: fontSize.small,
  },
  imageSec: {
    marginTop: size.moderateScale(40),
    alignItems: 'center',
    paddingLeft: size.moderateScale(90),
  },
  imageThird: {
    alignItems: 'flex-end',
    paddingRight: size.moderateScale(20),
  },
});

export default styles;
