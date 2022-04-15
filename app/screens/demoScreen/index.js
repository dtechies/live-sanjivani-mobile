import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'components';
import * as styles from './styles';

export const DemoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container()}>
      <Pressable>
        <Text style={styles.textLanding()} tx={'demo_screen.demo_screen'} />
      </Pressable>
      <Pressable onPress={() => navigation.goBack()} style={styles.button()}>
        <Text style={styles.textLanding()} tx={'demo_screen.back'} />
      </Pressable>
    </View>
  );
};
