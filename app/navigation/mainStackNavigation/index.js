import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';
import {DemoScreen, LandingScreen, AddScreen} from 'screens';

import {BottomStackNavigation, AuthStackNavigation} from 'navigation';
const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  const {theme} = useSelector(state => ({
    theme: state.currentThemeMode.currentTheme,
  }));

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landingScreen" component={LandingScreen} />
        <Stack.Screen
          name="authStackNavigation"
          component={AuthStackNavigation}
        />
        <Stack.Screen
          name="bottomStackNavigation"
          component={BottomStackNavigation}
        />
        <Stack.Screen name="demoScreen" component={DemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
