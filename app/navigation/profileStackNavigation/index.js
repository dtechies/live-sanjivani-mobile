import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileScreen, DemoScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
