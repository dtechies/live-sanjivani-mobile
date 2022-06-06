import React from 'react';
import {BackHandler, Platform, ToastAndroid} from 'react-native';

let currentCount = 0;
export const useDoubleBackPressExit = () => {
  if (Platform.OS === 'ios') return;

  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    if (currentCount === 1) {
      subscription.remove();
      BackHandler.exitApp();
      return true;
    }
    backPressHandler();
    return true;
  });
};

const backPressHandler = () => {
  if (currentCount < 1) {
    currentCount += 1;
    ToastAndroid.show('Tap back again to exit the App', ToastAndroid.SHORT);
  }
  setTimeout(() => {
    currentCount = 0;
  }, 2000);
};
