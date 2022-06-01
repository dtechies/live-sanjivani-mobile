import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import * as styles from './styles';
import {lottieIcons} from 'theme';
import LottieView from 'lottie-react-native';

export const Loader = () => {
  return (
    <View style={styles.container()}>
      <LottieView speed={1.5} source={lottieIcons.loader} autoPlay loop />
    </View>
  );
};
