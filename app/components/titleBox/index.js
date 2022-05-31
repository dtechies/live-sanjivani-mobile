import React from 'react';
import {View} from 'react-native';
import * as styles from './styles';
import {Text} from '../';

export const TitleBox = props => {
  const {titleContainerStyle, titleTextStyle, title, titleTx} = props;
  return (
    <View style={[styles.container(), titleContainerStyle]}>
      <Text
        style={[styles.titleTxt(), titleTextStyle]}
        text={title}
        tx={titleTx}
      />
    </View>
  );
};
