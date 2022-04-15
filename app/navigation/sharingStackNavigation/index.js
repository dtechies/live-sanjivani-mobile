import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SharingScreen, DemoScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const SharingStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="sharingScreen" component={SharingScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
