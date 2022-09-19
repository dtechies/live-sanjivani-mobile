import React from 'react';
import {Platform, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LoginScreen,
  RegisterScreen,
  SelectServiceScreen,
  IntroScreen,
  DemoScreen,
  OtpScreen,
  OtpSelectionScreen,
} from 'screens';
import {color} from 'theme';
import {CustomStatusBar} from 'components';

const Stack = createNativeStackNavigator();
export const AuthStackNavigation = () => {
  return (
    <View style={{flex: 1}}>
      {Platform.OS === 'android' && (
        <CustomStatusBar
          backgroundColor={color.black}
          barStyle="light-content"
        />
      )}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="introScreen" component={IntroScreen} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen name="demoScreen" component={DemoScreen} />
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="otpScreen" component={OtpScreen} />
        <Stack.Screen
          name="otpSelectionScreen"
          component={OtpSelectionScreen}
        />

        <Stack.Screen
          name="selectServiceScreen"
          component={SelectServiceScreen}
        />
      </Stack.Navigator>
    </View>
  );
};
