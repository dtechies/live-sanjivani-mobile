import React from 'react';
import {View, Text} from 'react-native';
import * as styles from './styles';

export const DemoComponent = () => {
  return (
    <View style={styles.container()}>
      <Text>DemoComponent</Text>
    </View>
  );
};
