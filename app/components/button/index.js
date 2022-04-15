import {View, Pressable, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../';

export const Button = props => {
  const {buttonStyle, onPress, name, nameTx, leftIcon, buttonText} = props;
  return (
    <Pressable style={[styles.container(), buttonStyle]} onPress={onPress}>
      {leftIcon && <View style={styles.svgView()}>{leftIcon}</View>}

      <Text style={[styles.btnTxt(), buttonText]} text={name} tx={nameTx} />
    </Pressable>
  );
};
