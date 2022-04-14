import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {changeTheme} from 'redux-actions';

import {Text, ChangeLanguage} from 'components';
import {size, color, lottieIcons, IcWeb} from 'theme';
import * as styles from './styles';

export const DemoScreen = () => {
  const dispatch = useDispatch();
  const [colorTheme, setColorTheme] = useState('light');
  const {colors} = useTheme();
  return (
    <View style={styles.container(colors)}>
      <IcWeb
        height={size.moderateScale(30)}
        width={size.moderateScale(30)}
        fill={colors.font}
      />
      <Pressable
        style={{marginVertical: size.moderateScale(10)}}
        onPress={() => {
          if (colorTheme == 'light') {
            dispatch(changeTheme('dark'));
            setColorTheme('dark');
          } else {
            dispatch(changeTheme('light'));
            setColorTheme('light');
          }
        }}>
        <Text
          style={{
            color: colors.font,
          }}
          tx={'demo_screen.demo_data'}
        />
      </Pressable>
      <ChangeLanguage textStyle={{color: colors.font}} />
      <View
        style={{
          height: size.moderateScale(50),
          width: size.moderateScale(50),
        }}>
        <LottieView source={lottieIcons.loader} autoPlay loop />
      </View>
    </View>
  );
};
