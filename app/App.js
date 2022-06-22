import React, {useState, useMemo, createContext, useEffect} from 'react';
import {LogBox, Alert, BackHandler, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as RNLocalize from 'react-native-localize';
import {Host} from 'react-native-portalize';
import i18n from 'i18n-js';

import {store, persistor} from './redux';
import {MainStackNavigation} from './navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AlertModal} from 'components';

import OneSignal from 'react-native-onesignal';
export const LocalizationContext = createContext();

const App = () => {
  const [locale, setLocale] = useState('en');
  const [isModalOpen, closeModal] = useState(false);

  const [notificationData, setNotificationData] = useState();
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  LogBox.ignoreAllLogs();

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

          // Alert.alert(
          //   'Complete notification?',
          //   'Test1111',
          //   [button1, button2],
          //   {
          //     cancelable: true,
          //   },
          // );
        },
      );
      // setNotificationWillShowInForegroundHandler
      OneSignal.setNotificationOpenedHandler(notification => {
        // alert(`${notification.notification.title}`);
        // console.log('OneSignal: notification opened:', notification);
        let notificationData = notification.notification.additionalData;
        const obj = notificationData;
        let isEmptyObject = Object.keys(obj).length > 0;

        if (isEmptyObject) {
          setNotificationData(notificationData);
          closeModal(true);
        }
      });
      OneSignal.promptForPushNotificationsWithUserResponse(notification => {
        // console.log('prompt', notification);
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
    };
    ONESIGNAL();
    console.log('RNLocalize.locale', RNLocalize.locale);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LocalizationContext.Provider value={localizationContext}>
          {/* <View style={{flex: 1}}> */}
          <GestureHandlerRootView style={{flex: 1}}>
            <Host>
              <MainStackNavigation />
              {isModalOpen && (
                <AlertModal
                  closeModal={() => closeModal(false)}
                  data={notificationData}
                  title={'abdul'}
                />
              )}
            </Host>
          </GestureHandlerRootView>
          {/* </View> */}
        </LocalizationContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
