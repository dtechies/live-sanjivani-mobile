import React from 'react';
import {View, Pressable} from 'react-native';
import {Text} from 'components';
import {size} from 'theme';
import {useNavigation} from '@react-navigation/native';

import * as styles from './styles';
export const ProgressScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container()}>
      <Pressable style={{marginVertical: size.moderateScale(10)}}>
        <Text style={styles.textLanding()} tx={'progress_screen.progress'} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('demoScreen')}
        style={styles.button()}>
        <Text style={styles.textLanding()} tx={'demo_screen.go_to_demo'} />
      </Pressable>
    </View>
  );
};
