import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen, SelectServiceScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="registerScreen" component={RegisterScreen} />
      <Stack.Screen
        name="selectServiceScreen"
        component={SelectServiceScreen}
      />
    </Stack.Navigator>
  );
};
