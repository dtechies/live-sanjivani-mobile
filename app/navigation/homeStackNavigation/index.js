import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LandingScreen, DemoScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="landingScreen" component={LandingScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
