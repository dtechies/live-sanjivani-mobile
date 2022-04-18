import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigation,
  ProfileStackNavigation,
  ProgressStackNavigation,
  SharingStackNavigation,
  AddStackNavigation,
} from '../';
import {BottomTab} from 'components';

const Tab = createBottomTabNavigator();
export const BottomStackNavigation = props => {
  const getTabBarVisibility = route => {
    // console.log('route', route);
    route = route.getState().routes[route.getState().index];
    if (route.state) {
      const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';
      if (routeName === 'loginScreen' || routeName === 'registerScreen') {
        return false;
      }
    }
    return true;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => {
        return <BottomTab {...props} />;
      }}>
      <Tab.Screen
        name="Today"
        component={HomeStackNavigation}
        options={({navigation}) => ({
          tabBarVisible: getTabBarVisibility(navigation),
          unmountOnBlur: true,
        })}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressStackNavigation}
        options={{
          tabBarLabel: 'ProgressScreen',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Sharing"
        component={SharingStackNavigation}
        options={{
          tabBarLabel: 'SharingStackNavigation',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStackNavigation}
        options={{
          tabBarLabel: 'AddStackNavigation',
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: 'ProfileStackNavigation',
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};
