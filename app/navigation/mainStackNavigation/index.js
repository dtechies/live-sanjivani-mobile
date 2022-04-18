import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';
import {DemoScreen, LandingScreen, LoginScreen, RegisterScreen} from 'screens';

import {BottomStackNavigation} from 'navigation';
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
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen
          name="bottomStackNavigation"
          component={BottomStackNavigation}
        />
        <Stack.Screen name="demoScreen" component={DemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
