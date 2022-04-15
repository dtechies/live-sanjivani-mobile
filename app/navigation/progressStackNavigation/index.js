import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProgressScreen, DemoScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const ProgressStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="progressScreen" component={ProgressScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
