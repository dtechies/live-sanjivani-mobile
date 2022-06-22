import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LoginScreen,
  RegisterScreen,
  SelectServiceScreen,
  IntroScreen,
  DemoScreen,
  OtpScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const AuthStackNavigation = () => {
  return (
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
        name="selectServiceScreen"
        component={SelectServiceScreen}
      />
    </Stack.Navigator>
  );
};
