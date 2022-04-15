import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Loader,
  Text,
  ChangeLanguage,
  Button,
  TitleBox,
  InputBox,
  IcHome,
} from 'components';
import {size, color, IcWeb, IcTick, IcPlus, IcSearch} from 'theme';

import * as styles from './styles';

export const DemoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container()}>
      <Loader />
      <Pressable onPress={() => navigation.navigate('landingScreen')}>
        <Text style={styles.textLanding()} tx={'demo_screen.go_to_landing'} />
      </Pressable>
      <InputBox
        title={'Title'}
        // titleStyle={styles.text()}
        // onRightIconPress={() => alert('hello')}
        // leftIcon={<Text style={{color: 'red'}}>+91</Text>}
        // rightIcon={
        //   <IcHome
        //     height={size.moderateScale(20)}
        //     width={size.moderateScale(20)}
        //     fill={color.darkGrey}
        //   />
        // }
      />
      <ChangeLanguage textStyle={{color: color.black}} />
      <Button leftIcon={<IcPlus />} name={'submit'} />
      <TitleBox name={'BHAVYA'} />
    </View>
  );
};
