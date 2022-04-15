import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import {Loader, Text, ChangeLanguage, Button, TitleBox} from 'components';
import {size, color, IcWeb, IcTick, IcPlus, IcSearch} from 'theme';
import * as styles from './styles';

export const DemoScreen = () => {
  const navigation = useNavigation();
  const [type, setType] = useState();
  return (
    <View style={styles.container()}>
      <Loader />
      <Pressable onPress={() => navigation.navigate('landingScreen')}>
        <Text style={styles.textLanding()} tx={'demo_screen.go_to_landing'} />
      </Pressable>
      <ChangeLanguage textStyle={{color: color.black}} />
      <Button leftIcon={<IcPlus />} name={'submit'} />
      <TitleBox name={'BHAVYA'} />
    </View>
  );
};
