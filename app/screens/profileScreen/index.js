import React from 'react';
import {View, Pressable} from 'react-native';
import {Text} from 'components';
import {useNavigation} from '@react-navigation/native';

import * as styles from './styles';
export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container()}>
      <Pressable>
        <Text style={styles.textLanding()} tx={'profile_screen.profile'} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('demoScreen')}
        style={styles.button()}>
        <Text style={styles.textLanding()} tx={'demo_screen.go_to_demo'} />
      </Pressable>
    </View>
  );
};
