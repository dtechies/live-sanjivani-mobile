import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as styles from './styles';
import {images} from 'theme';

export const SplashScreen = props => {
  const navigation = useNavigation();
  const [login, setLogin] = useState(false);

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
