import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AddScreen,
  DemoScreen,
  ProgressScreen,
  MedicationReminderScreen,
  AppointmentReminderScreen,
  CheckMedicationReminderScreen,
  OtherScreen,
  CareGiver,
  SymptomsScreen,
  MedicalJournalScreen,
  AddDetailsScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const AddStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="addScreen" component={AddScreen} />
      <Stack.Screen name="otherScreen" component={OtherScreen} />
      <Stack.Screen
        name="checkMedicationReminderScreen"
        component={CheckMedicationReminderScreen}
      />
      <Stack.Screen
        name="medicationReminderScreen"
        component={MedicationReminderScreen}
      />
      <Stack.Screen
        name="appointmentReminderScreen"
        component={AppointmentReminderScreen}
      />
      <Stack.Screen name="addDetailsScreen" component={AddDetailsScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
      <Stack.Screen name="progressScreen" component={ProgressScreen} />
      <Stack.Screen name="careGiver" component={CareGiver} />
      <Stack.Screen name="symptomsScreen" component={SymptomsScreen} />
      <Stack.Screen
        name="medicalJournalScreen"
        component={MedicalJournalScreen}
      />
    </Stack.Navigator>
  );
};
