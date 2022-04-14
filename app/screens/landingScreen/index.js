import React from 'react';
import {View, Pressable} from 'react-native';
import {Text} from 'components';
import {size} from 'theme';

import * as styles from './styles';
export const LandingScreen = () => {
  return (
    <View style={styles.container()}>
      <Pressable style={{marginVertical: size.moderateScale(10)}}>
        <Text style={styles.textLanding()} tx={'landing_screen.landing'} />
      </Pressable>
    </View>
  );
};
