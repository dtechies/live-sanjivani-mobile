import React from 'react';
import {View, Text} from 'react-native';
import * as styles from './styles';

export const TitleBox = props => {
  const {titleContainerStyle, titleTextStyle, name} = props;
  return (
    <View style={[styles.container(), titleContainerStyle]}>
      <Text style={[styles.titleTxt(), titleTextStyle]}>{name}</Text>
    </View>
  );
};
