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
    navigation.addListener('focus', () => {
      setTimeout(() => {
        login === true
          ? navigation.navigate('bottomStackNavigation')
          : navigation.navigate('authStackNavigation');
      }, 1000);
    });
  }, [navigation]);

  return (
    <View style={styles.container()}>
      <Image source={images.icSplash} style={styles.imageView()} />
    </View>
  );
};
