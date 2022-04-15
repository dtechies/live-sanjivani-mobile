import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddScreen, DemoScreen} from 'screens';

const Stack = createNativeStackNavigator();
export const AddStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="addScreen" component={AddScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
