import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ProfileScreen,
  DemoScreen,
  HelpSupportScreen,
  AddScreen,
  MedicationReminderScreen,
  AppointmentReminderScreen,
  MedicalJournalScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="addScreen" component={AddScreen} />
      <Stack.Screen name="helpSupportScreen" component={HelpSupportScreen} />
      <Stack.Screen
        name="medicationReminderScreen"
        component={MedicationReminderScreen}
      />
      <Stack.Screen
        name="appointmentReminderScreen"
        component={AppointmentReminderScreen}
      />
      <Stack.Screen
        name="medicalJournalScreen"
        component={MedicalJournalScreen}
      />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
    </Stack.Navigator>
  );
};
