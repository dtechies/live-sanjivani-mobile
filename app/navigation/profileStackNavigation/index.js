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
  CheckMedicationReminderScreen,
  HelpSupportDetailsScreen,
  MyAppointments,
  MyCareGiver,
  CareGiver,
  OtherDetailsScreen,
  SymptomDetailScreen,
  MedicalJournalLists,
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
      <Stack.Screen
        name="helpSupportDetailsScreen"
        component={HelpSupportDetailsScreen}
      />
      <Stack.Screen
        name="checkMedicationReminderScreen"
        component={CheckMedicationReminderScreen}
      />
      <Stack.Screen name="myAppointments" component={MyAppointments} />
      <Stack.Screen name="myCareGiver" component={MyCareGiver} />
      <Stack.Screen name="careGiver" component={CareGiver} />
      <Stack.Screen name="OtherDetails" component={OtherDetailsScreen} />
      <Stack.Screen
        name="symptomDetailScreen"
        component={SymptomDetailScreen}
      />
      <Stack.Screen
        name="medicalJournalLists"
        component={MedicalJournalLists}
      />
    </Stack.Navigator>
  );
};
