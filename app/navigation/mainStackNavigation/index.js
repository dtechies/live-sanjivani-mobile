import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useSelector} from 'react-redux';

import {SplashScreen} from 'screens';

import {BottomStackNavigation, AuthStackNavigation} from 'navigation';
const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  // const {login, userData} = useSelector(state => ({
  //   login: state.userDataReducer.userDataResponse.login,
  //   userData: state.userDataReducer.userDataResponse.userData,
  // }));
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splashScreen" component={SplashScreen} />
        <Stack.Screen
          name="authStackNavigation"
          component={AuthStackNavigation}
        />
        <Stack.Screen
          name="bottomStackNavigation"
          component={BottomStackNavigation}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
