import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AddScreen,
  DemoScreen,
  ProgressScreen,
  MedicationReminderScreen,
  AppointmentReminderScreen,
} from 'screens';

const Stack = createNativeStackNavigator();
export const AddStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="addScreen" component={AddScreen} />
      <Stack.Screen name="demoScreen" component={DemoScreen} />
      <Stack.Screen name="progressScreen" component={ProgressScreen} />
      <Stack.Screen
        name="medicationReminderScreen"
        component={MedicationReminderScreen}
      />
      <Stack.Screen
        name="appointmentReminderScreen"
        component={AppointmentReminderScreen}
      />
    </Stack.Navigator>
  );
};
