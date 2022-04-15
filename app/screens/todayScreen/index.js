import React from 'react';
import {View, Pressable} from 'react-native';
import {Text} from 'components';

import * as styles from './styles';
export const TodayScreen = () => {
  return (
    <View style={styles.container()}>
      <Pressable>
        <Text style={styles.textLanding()} text={'Today Screen'} />
      </Pressable>
    </View>
  );
};
