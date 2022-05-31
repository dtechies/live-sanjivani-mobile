import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import * as styles from './styles';

export const Loader = () => {
  return (
    <View style={styles.container()}>
      <ActivityIndicator size="large" />
    </View>
  );
};
