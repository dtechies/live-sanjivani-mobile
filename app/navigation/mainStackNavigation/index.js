import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {SplashScreen} from 'screens';

import {BottomStackNavigation, AuthStackNavigation} from 'navigation';
const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  const {login} = useSelector(state => ({
    login: state.userDataReducer.userDataResponse.login,
  }));
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splashScreen" component={SplashScreen} />
        {login ? (
          <Stack.Screen
            name="bottomStackNavigation"
            component={BottomStackNavigation}
            options={{gestureEnabled: false}}
          />
        ) : (
          <Stack.Screen
            name="authStackNavigation"
            component={AuthStackNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
