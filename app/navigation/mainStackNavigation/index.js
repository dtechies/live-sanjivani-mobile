import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';
import {DemoScreen, LandingScreen} from 'screens';
import {darkTheme, lightTheme} from '../../theme/Colors';

const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  const {theme} = useSelector(state => ({
    theme: state.currentThemeMode.currentTheme,
  }));

  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="demoScreen" component={DemoScreen} />
        <Stack.Screen name="landingScreen" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
