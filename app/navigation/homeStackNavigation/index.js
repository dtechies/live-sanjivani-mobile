import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LandingScreen,
  DemoScreen,
  TodayScreen,
  AppointmentReminderScreen,
  LoginScreen,
  HelpSupportScreen,
  RegisterScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="landingScreen" component={LandingScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="registerScreen" component={RegisterScreen} />
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
      <Stack.Screen name="todayScreen" component={TodayScreen} />
      <Stack.Screen
        name="appointmentReminderScreen"
        component={AppointmentReminderScreen}
      />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
