import React, {useState, useRef, useContext} from 'react';
import {View, TextInput, Pressable, Animated} from 'react-native';

import * as styles from './styles';
import {Text} from '../';
import {color} from 'theme';
import {images, SearchValNew, IcIntro2, IcIntro3, IcSplashColor} from 'theme';
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
    isRightSide,
    withButton,
    defaultNumber,
    mainContainerStyle,
    placeholderTextColor,
    leftIconName,
    isRightUnit,
    unit,
    btnName,
    buttonStyle,
  } = props;

  const {t} = useContext(LocalizationContext);
  const i18nText = titleTx && t(titleTx, txOptions);
  const content = i18nText || title;

  return (
    <View style={mainContainerStyle}>
      {content && !withButton && (
        <Text style={[styles.titleTextStyle(), titleStyle]}> {content}</Text>
      )}
      {
        <View
          style={[styles.container(leftIcon, props.isShadow), containerStyle]}>
          {leftIcon && (
            <View style={styles.leftIconContainer()}>{leftIconName}</View>
          )}
          {defaultNumber && (
            <View style={styles.leftIconContainer()}>
              <Text>{defaultNumber}</Text>
            </View>
          )}
          <TextInput
            testID={inputTestId}
            style={[styles.inputContainer(leftIcon, isRightUnit), inputStyle]}
            // placeholderTextColor={leftIcon ? color.blue : color.dimGrey}
            placeholderTextColor={placeholderTextColor}
            selectionColor={color.dimGrey}
            value={value}
            ref={textRef}
            // maxLength={4}
            {...props}
          />
          {withButton && (
            <Pressable
              onPress={() => onRightIconPress()}
              {...props}
              style={[styles.rightIconContainer(), buttonStyle]}>
              <Text style={styles.btnTextRight()}>{btnName}</Text>
            </Pressable>
          )}
          {rightIcon && (
            <Pressable
              onPress={() => onRightIconPress()}
              style={styles.rightIcon()}>
              <Text>X</Text>
            </Pressable>
          )}
          {isRightSide && (
            <View style={styles.rightIconContainerNew()}>
              <Pressable onPress={() => onRightIconPress()}>
                <Text style={styles.btnTextRight()}>Upload</Text>
              </Pressable>
            </View>
          )}
          {isRightUnit && (
            // <View style={styles.rightUnit()}>
            <Text style={styles.btnTextUnit()} text={unit} />
            // </View>
          )}
        </View>
      }

      {/* <View style={[styles.container(leftIcon), containerStyle]}>
        {leftIcon && <View style={styles.leftIconContainer()}>{leftIcon}</View>}
        <TextInput
          testID={inputTestId}
          style={[styles.inputContainer(leftIcon), inputStyle]}
          placeholderTextColor={color.purple}
          selectionColor={color.dimGrey}
          value={value}
          ref={textRef}
          {...props}
        />
        {rightIcon && (
          <Pressable
            onPress={() => onRightIconPress()}
            style={styles.rightIconContainer()}>
            {rightIcon}
          </Pressable>
        )}
      </View> */}
    </View>
  );
};
