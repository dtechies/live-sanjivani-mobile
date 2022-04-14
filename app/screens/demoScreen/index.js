import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import {Text, ChangeLanguage} from 'components';
import {size, color, IcWeb, IcTick} from 'theme';
import * as styles from './styles';

export const DemoScreen = () => {
  const navigation = useNavigation();
  const [type, setType] = useState();
  return (
    <View style={styles.container()}>
      <Pressable onPress={() => navigation.navigate('landingScreen')}>
        <Text style={styles.textLanding()} tx={'demo_screen.go_to_landing'} />
      </Pressable>
      <ChangeLanguage textStyle={{color: color.black}} />
    </View>
  );
};
