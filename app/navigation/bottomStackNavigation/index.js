import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OneSignal from 'react-native-onesignal';
import {View} from 'react-native';
import {
  HomeStackNavigation,
  ProfileStackNavigation,
  ProgressStackNavigation,
  SharingStackNavigation,
  AddStackNavigation,
} from '../';

import {BottomTab, AlertModal, CustomStatusBar} from 'components';
import {color} from 'theme';

const Tab = createBottomTabNavigator();
export const BottomStackNavigation = props => {
  const [isModalOpen, closeModal] = useState(false);
  const [notificationDetail, setNotificationDetail] = useState();

  //OneSignal Init Code
  OneSignal.setAppId('3b7300ff-2be3-46f8-ad6a-5473e664b134');
  OneSignal.setLogLevel(6, 0);
  OneSignal.setRequiresUserPrivacyConsent(false);
  // OneSignal.promptForPushNotificationsWithUserResponse(response => {
  //   // console.log('Prompt response:', response);
  // });
  //END OneSignal Init Code
  useEffect(() => {
    const ONESIGNAL = async () => {
      OneSignal.setNotificationWillShowInForegroundHandler(
        notificationReceivedEvent => {
          // console.log(
          //   'Bottom navigation OneSignal: notification will show in foreground:',
          //   notificationReceivedEvent,
          // );
          let notification = notificationReceivedEvent.getNotification();
          let notificationData = notification.additionalData;
          const obj = notificationData;
          let isEmptyObject = Object.keys(obj).length > 0;
          // console.log('isEmptyObject', isEmptyObject); //
          // console.log('ShowInForeground notification Data ', obj);
          // console.log('obj', obj);
          if (isEmptyObject) {
            setNotificationDetail(obj);
            closeModal(true);
          }
          notificationReceivedEvent.complete(notification);
        },
      );
      // setNotificationWillShowInForegroundHandler
      OneSignal.setNotificationOpenedHandler(notification => {
        // console.log(
        //   'Bottom navigation OneSignal: notification opened:',
        //   notification,
        // );
        let notificationData = notification.notification.additionalData;
        const obj = {notificationData};
        let isEmptyObject = Object.keys(obj).length > 0;

        // console.log('notification open handler', notificationData);
        if (isEmptyObject) {
          setNotificationDetail(notificationData);
          closeModal(true);
        }
      });
      OneSignal.setInAppMessageClickHandler(notification => {
        let notificationData = notification.notification.additionalData;
        // console.log(' bottom setInAppMessageClickHandler:', notificationData);
        const obj = {notificationData};
        let isEmptyObject = Object.keys(obj).length > 0;

        if (isEmptyObject) {
          setNotificationDetail(notificationData);
          closeModal(true);
        }
      });
      OneSignal.promptForPushNotificationsWithUserResponse(notification => {
        // console.log('Bottom navigation prompt', notification);
        // notification && closeModal(true);
        // setNotificationDetail(notification);
      });
      OneSignal.setInAppMessageClickHandler(event => {
        // console.log('bottom OneSignal IAM clicked:', event);
      });
      OneSignal.addEmailSubscriptionObserver(event => {
        // console.log('bottom OneSignal: email subscription changed: ', event);
      });
      OneSignal.addSubscriptionObserver(event => {
        // console.log('bottom OneSignal: subscription changed:', event);
      });
      OneSignal.addPermissionObserver(event => {
        // console.log('bottom OneSignal: permission changed:', event);
      });

      const deviceState = await OneSignal.getDeviceState();

      // console.log('Bottom navigation deviceState', deviceState);
      // console.log(
      //   'Bottom navigation userId / player id ==> ',
      //   deviceState.userId,
      // );
    };
    ONESIGNAL();
  }, []);

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
    <View style={{flex: 1}}>
      <CustomStatusBar
        backgroundColor={color.black}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <Tab.Navigator
        initialRouteName="Today"
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
      {isModalOpen && (
        <AlertModal
          closeModal={() => closeModal(false)}
          data={notificationDetail}
          title={'liveSanjivani'}
        />
      )}
    </View>
  );
};
