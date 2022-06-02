import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ProfileScreen,
  DemoScreen,
  HelpSupportScreen,
  SymptomsScreen,
  MedicalJournalScreen,
  MedicationReminderScreen,
  AppointmentReminderScreen,
  LoginScreen,
  ProfileDetailScreen,
  ViewMedicationScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
      <Stack.Screen
        name="medicalJournalScreen"
        component={MedicalJournalScreen}
      />
      <Stack.Screen
        name="medicationReminderScreen"
        component={MedicationReminderScreen}
      />
      <Stack.Screen
        name="viewMedicationScreen"
        component={ViewMedicationScreen}
      />
      <Stack.Screen
        name="appointmentReminderScreen"
        component={AppointmentReminderScreen}
      />
      <Stack.Screen
        name="profileDetailScreen"
        component={ProfileDetailScreen}
      />
      <Stack.Screen name="symptomsScreen" component={SymptomsScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
