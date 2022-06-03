import React, {useState, useMemo, createContext, useEffect} from 'react';
import {View, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as RNLocalize from 'react-native-localize';
import {Host} from 'react-native-portalize';
import i18n from 'i18n-js';

import {store, persistor} from './redux';
import {MainStackNavigation} from './navigation';
import DoubleTapToClose from './utils/hooks/back-double-press';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import OneSignal from 'react-native-onesignal';
export const LocalizationContext = createContext();

const App = () => {
  const [locale, setLocale] = useState(RNLocalize.locale);

  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  LogBox.ignoreAllLogs();

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // when in foreground state
  //     console.log('foreground onMessage ==>', remoteMessage);
  //     // when use @aws-amplify/pushnotification
  //     // sendLocalNotification({
  //     //   title: remoteMessage.data.title || '',
  //     //   message: remoteMessage.data.message || '',
  //     // });
  //     // when use react-native-push-notification
  //     // sendLocalNotification({
  //     //   title: remoteMessage.notification.title || '',
  //     //   message: remoteMessage.notification.body || '',
  //     // });
  //   });

  //   return unsubscribe;
  // }, []);
  // useEffect(() => {
  //   getFcmToken();
  // }, []);

  //OneSignal Init Code
  OneSignal.setAppId('3b7300ff-2be3-46f8-ad6a-5473e664b134');
  OneSignal.setLogLevel(6, 0);
  OneSignal.setRequiresUserPrivacyConsent(false);
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    // console.log('Prompt response:', response);
  });
  //END OneSignal Init Code

  useEffect(() => {
    const ONESIGNAL = async () => {
      OneSignal.setNotificationWillShowInForegroundHandler(
        notifReceivedEvent => {
          // console.log(
          //   'OneSignal: notification will show in foreground:',
          //   notifReceivedEvent,
          // );
          let notif = notifReceivedEvent.getNotification();
          // console.log('WILL SHOW');

          // console.log('notif ==>', notif);

          // FOR DIRECTLY RECIEVE IT WITHOUT ALERTA
          notifReceivedEvent.complete(notif);
          //.....

          // const button1 = {
          //   text: 'Cancel',
          //   onPress: () => {
          //     notifReceivedEvent.complete();
          //   },
          //   style: 'cancel',
          // };

          // const button2 = {
          //   text: 'Complete',
          //   onPress: () => {
          //     notifReceivedEvent.complete(notif);
          //   },
          // };

          // Alert.alert('Complete notification?', 'Test', [button1, button2], {
          //   cancelable: true,
          // });
        },
      );
      // setNotificationWillShowInForegroundHandler
      OneSignal.setNotificationOpenedHandler(notification => {
        // console.log('OneSignal: notification opened:', notification);
      });
      OneSignal.setInAppMessageClickHandler(event => {
        // console.log('OneSignal IAM clicked:', event);
      });
      OneSignal.addEmailSubscriptionObserver(event => {
        // console.log('OneSignal: email subscription changed: ', event);
      });
      OneSignal.addSubscriptionObserver(event => {
        // console.log('OneSignal: subscription changed:', event);
      });
      OneSignal.addPermissionObserver(event => {
        // console.log('OneSignal: permission changed:', event);
      });

      const deviceState = await OneSignal.getDeviceState();
      // console.log('deviceState', deviceState);
      // console.log('userId / player id ==> ', deviceState.userId);
    };
    ONESIGNAL();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LocalizationContext.Provider value={localizationContext}>
          {/* <View style={{flex: 1}}> */}
          <GestureHandlerRootView style={{flex: 1}}>
            <Host>
              <DoubleTapToClose />
              <MainStackNavigation />
            </Host>
          </GestureHandlerRootView>
          {/* </View> */}
        </LocalizationContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
