import React, {useState, useRef, useContext} from 'react';
import {View, TextInput, Pressable, Animated} from 'react-native';

import * as styles from './styles';
import {Text} from '../';
import {color} from 'theme';
import 'i18n';
import {LocalizationContext} from '../../App';

export const InputBox = props => {
  const {
    inputStyle,
    leftIcon,
    value,
    containerStyle,
    textRef,
    title,
    titleTx,
    txOptions,
    titleStyle,
    rightIcon,
    onRightIconPress,
    inputTestId,
  } = props;

  const {t} = useContext(LocalizationContext);
  const i18nText = titleTx && t(titleTx, txOptions);
  const content = i18nText || title;

  return (
    <View>
      <Text style={[styles.titleTextStyle(), titleStyle]}> {content}</Text>
      <View style={[styles.container(leftIcon), containerStyle]}>
        {leftIcon && <View style={styles.leftIconContainer()}>{leftIcon}</View>}
        <TextInput
          testID={inputTestId}
          style={[styles.inputContainer(leftIcon), inputStyle]}
          placeholderTextColor={color.grey}
          selectionColor={color.dimGrey}
          value={value}
          ref={textRef}
          {...props}
        />
        {rightIcon && (
          <Pressable
            onPress={() => onRightIconPress()}
            style={styles.leftIconContainer()}>
            {rightIcon}
          </Pressable>
        )}
      </View>
    </View>
  );
};
