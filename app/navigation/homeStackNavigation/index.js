import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LandingScreen,
  DemoScreen,
  TodayScreen,
  AppointmentReminderScreen,
  LoginScreen,
  HelpSupportScreen,
  HelpSupportDetailsScreen,
  RegisterScreen,
  SelectServiceScreen,
  ViewMedicationScreen,
  MedicationReminderScreen,
  CheckMedicationReminderScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="todayScreen" component={TodayScreen} />
      <Stack.Screen
        name="viewMedicationScreen"
        component={ViewMedicationScreen}
      />
      <Stack.Screen name="landingScreen" component={LandingScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="registerScreen" component={RegisterScreen} />
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
      {/* <Stack.Screen
        name="helpSupportDetailsScreen"
        component={HelpSupportDetailsScreen}
      /> */}
      <Stack.Screen
        name="medicationReminderScreen"
        component={MedicationReminderScreen}
      />
      <Stack.Screen
        name="appointmentReminderScreen"
        component={AppointmentReminderScreen}
      />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
      <Stack.Screen
        name="selectServiceScreen"
        component={SelectServiceScreen}
      />
      <Stack.Screen
        name="checkMedicationReminderScreen"
        component={CheckMedicationReminderScreen}
      />
    </Stack.Navigator>
  );
};
