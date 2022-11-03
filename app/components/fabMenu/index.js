import React from 'react';
import {View, Pressable, Animated, Easing} from 'react-native';
import {Text} from 'components';
import {size, IcAppointment, IcPills, IcBtnPlus, color} from 'theme';
import * as styles from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
let spinValue = new Animated.Value(0);

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '225deg'],
});
const translate1X = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: [size.moderateScale(0), -size.moderateScale(60)],
});
const translate2X = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: [size.moderateScale(0), -size.moderateScale(120)],
});
const scaleX = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 1],
});

const onClickButton = () => {
  Animated.timing(spinValue, {
    toValue: spinValue._value === 0 ? 1 : 0,
    duration: 200,
    extrapolate: 'clamp',
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start(() => spinValue.setValue(spinValue._value === 0 ? 1 : 0));
};
export const FabMenu = ({addAppointment, addReminder}) => {
  return (
    <View style={styles.demoView()}>
      <Animated.View style={styles.buttonsContainer(translate1X)}>
        <Animated.View style={styles.labelScale(scaleX)}>
          <Text style={styles.labelText()} tx={'today_screen.addMedication'} />
        </Animated.View>
        <AnimatedPressable
          onPress={() => {
            onClickButton();
            addReminder();
          }}
          style={[styles.circleBtnView('rgb(218, 173, 38)')]}>
          <IcPills
            fill={color.white}
            height={size.moderateScale(25)}
            width={size.moderateScale(25)}
          />
        </AnimatedPressable>
      </Animated.View>
      <Animated.View style={styles.buttonsContainer(translate2X)}>
        <Animated.View style={styles.labelScale(scaleX)}>
          <Text style={styles.labelText()} tx={'today_screen.addAppointment'} />
        </Animated.View>
        <AnimatedPressable
          onPress={() => {
            onClickButton();
            addAppointment();
          }}
          style={[styles.circleBtnView('rgb(246, 117, 117)')]}>
          <IcAppointment
            fill={color.white}
            height={size.moderateScale(25)}
            width={size.moderateScale(25)}
          />
        </AnimatedPressable>
      </Animated.View>
      <AnimatedPressable
        style={styles.circleBtn(spin)}
        onPress={() => onClickButton()}>
        <IcBtnPlus
          height={size.moderateScale(69)}
          width={size.moderateScale(69)}
        />
      </AnimatedPressable>
    </View>
  );
};
