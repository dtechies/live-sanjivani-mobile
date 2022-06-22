import {View, Pressable, Animated, Easing} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../';
import {color, IcSelected, size} from 'theme';
import {SvgUri} from 'react-native-svg';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const MedicalItems = props => {
  let translate = new Animated.Value(0);
  const {
    containerStyle,
    onPress,
    nameFirst,
    nameSecond,
    nameFirstTx,
    nameSecondTx,
    textFirstStyle,
    textSecondStyle,
    svgCardItems,
    isSelected,
    nameThirdTx,
    nameThird,
    index,
    animateCard = true,
  } = props;

  const notAnimatedTranslate = 0;
  const animatedTranslate = translate.interpolate({
    inputRange: [0, 1],
    outputRange: [size.deviceWidth, 0],
  });
  let duration = index > 10 ? (index + 1) * 25 : (index + 1) * 100;
  React.useEffect(() => {
    Animated.timing(translate, {
      toValue: 1,
      duration: duration,
      delay: index > 10 ? (index + 1) * 40 : 0,
      easing: Easing.elastic(1),
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  }, []);

  let result = nameFirst.includes('{');
  let something = false;
  if (result) {
    something = true;
    result = nameFirst.slice(1, nameFirst.length - 1);
    result = result.replace(',', '  ').replace(/'/g, '');
  }
  let valueHere = something ? result : nameFirst;
  return (
    <AnimatedPressable
      style={[
        styles.container(
          animateCard ? animatedTranslate : notAnimatedTranslate,
        ),
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={styles.flexOne()} />
      <View style={styles.centerView()}>
        {/* <View style={styles.centerLeftView()}>{svgCardItems}</View> */}
        <SvgUri
          height={size.moderateScale(35)}
          width={size.moderateScale(35)}
          // color={'red'}
          uri={svgCardItems}
        />
        {/* <SvgXml
          xml={imgXml}
          // .replace(/fill="#[0-9a-f]{6}"/g, `fill="${color.turquoiseNew}"`)
          // .replace(/stroke="#[0-9a-f]{6}"/g, `stroke="${'green'}"`)

          height={size.moderateScale(35)}
          width={size.moderateScale(35)}
        /> */}
        <View style={styles.centerRightView()}>
          <View style={styles.flexDirectionStyle()}>
            <Text
              style={[styles.TextFirstTxt(), textFirstStyle]}
              text={valueHere}
              // tx={nameFirstTx}
            />
            <Text
              style={[styles.TextUnitTxt(), textFirstStyle]}
              text={' ' + nameThird ? nameThird : ''}
              tx={nameThirdTx}
            />
          </View>
          <Text
            style={[styles.TextSecondTxt(), textSecondStyle]}
            text={nameSecond}
            tx={nameSecondTx}
          />
        </View>
      </View>

      <View style={styles.flexOne()}>
        {isSelected && (
          <IcSelected height={20} width={20} fill={color.borderBlue} />
        )}
      </View>
    </AnimatedPressable>
  );
};
