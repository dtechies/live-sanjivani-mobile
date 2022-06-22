import React, {useCallback} from 'react';
import {BackHandler, Platform, ToastAndroid} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useDoubleBackPressExit = () => {
  let currentCount = 0;
  useFocusEffect(
    useCallback(() => {
      const backPressHandler = () => {
        if (currentCount < 1) {
          currentCount += 1;
          ToastAndroid.show(
            'Tap back again to exit the App',
            ToastAndroid.SHORT,
          );
          return true;
        } else {
          BackHandler.exitApp();
          // return true;
        }
        setTimeout(() => {
          currentCount = 0;
        }, 2000);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', backPressHandler);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backPressHandler);
    }, []),
  );
  if (Platform.OS === 'ios') return;
};
//   const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
//     if (currentCount === 1) {
//       subscription.remove();
//       BackHandler.exitApp();
//       return true;
//     }
//     backPressHandler();
//     return true;
//   });
// };

// const backPressHandler = () => {
//   if (currentCount < 1) {
//     currentCount += 1;
//     ToastAndroid.show('Tap back again to exit the App', ToastAndroid.SHORT);
//   }
//   setTimeout(() => {
//     currentCount = 0;
//   }, 2000);
// };
