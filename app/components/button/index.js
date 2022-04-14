import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';

export const Button = props => {
  const {buttonStyle, onPress, name, leftIcon, buttonText} = props;
  return (
    <Pressable style={[styles.container(), buttonStyle]} onPress={onPress}>
      {leftIcon && <View style={styles.svgView()}>{leftIcon}</View>}
      <Text style={[styles.btnTxt(), buttonText]}>{name}</Text>
    </Pressable>
  );
};
