import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as styles from './styles';
import {useSelector} from 'react-redux';
import {images} from 'theme';

export const SplashScreen = props => {
  const navigation = useNavigation();
  const {login} = useSelector(state => ({
    login: state.userDataReducer.userDataResponse.login,
  }));

  useEffect(() => {
    setTimeout(() => {
      login
        ? navigation.navigate('bottomStackNavigation')
        : navigation.navigate('authStackNavigation');
    }, 2000);
  }, []);

  return (
    <View style={styles.container()}>
      <Image source={images.icSplash} style={styles.imageView()} />
    </View>
  );
};
