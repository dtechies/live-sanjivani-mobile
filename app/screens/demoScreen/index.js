import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, InputBox, IcHome} from 'components';
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
    </View>
  );
};
