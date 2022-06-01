import React, {useState, useMemo, createContext, useEffect} from 'react';
import {View, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as RNLocalize from 'react-native-localize';
import {Host} from 'react-native-portalize';
import i18n from 'i18n-js';
import messaging from '@react-native-firebase/messaging';
import {store, persistor} from './redux';
import {MainStackNavigation} from './navigation';
import DoubleTapToClose from './utils/hooks/back-double-press';
import {Amplify} from 'aws-amplify';
import PushNotification from '@aws-amplify/pushnotification';
import firebase from '@react-native-firebase/app';

// import PushNativeNotification from 'react-native-push-notification';
import awsconfig from '../src/aws-exports';

export const LocalizationContext = createContext();
const App = () => {
  const [locale, setLocale] = useState(RNLocalize.locale);

  const notificationData = async () => {
    // get the notification data when notification is received
    // PushNotification.onNotification(notification => {
    //   // Note that the notification object structure is different from Android and IOS
    //   console.log('in app notification ==>', notification);
    //   if (notification.foreground) {
    //     console.log('App in foreground onNotification ', notification);
    //     // PushNativeNotification.localNotification({
    //     //   title: '',
    //     //   message: notification.data.message || '',
    //     // });
    //   }
    // });
    PushNotification.initializeAndroid();
    PushNotification.onNotification(notification => {
      if (notification.foreground) {
        console.log('onNotification foreground', notification);
      } else {
        console.log('onNotification background or closed', notification);
      }
      // extract the data passed in the push notification
      // const data = JSON.parse(notification.data['pinpoint.jsonBody']);
      // console.log('onNotification data', data);
      // // iOS only
      // notification.finish(PushNotificationIOS.FetchResult.NoData);
    });
    PushNotification.onNotificationOpened(notification => {
      console.log('onNotificationOpened', notification);
      // extract the data passed in the push notification
      // const data = JSON.parse(notification['pinpoint.jsonBody']);
      // console.log('onNotificationOpened data', data);
    });

    PushNotification.onRegister(token => {
      // onRegister() method calls once only, when the app/device is completely new.
      console.log('in app registration token ==>', token);
      PushNotification.updateEndpoint(token);
      // setToken
    });

    let fcmToken = await messaging().getToken();
    console.log('FCM TOKEN ==>', fcmToken);
    // get the notification data when notification is opened
    // PushNotification.onNotificationOpened(notification => {
    //   console.log('the notification is opened', notification);
    // });
    // console.log('demo end ==>');
  };
  const notificationOpen = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate('Notifications');
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // navigation.navigate('Notifications');
        }
      });
  };
  // const sendLocalNotification = options => {
  //   // when in foreground state
  //   console.log('foreground sendLocalNotification ==>', options);
  //   // PushNativeNotification.localNotification({
  //   //   channelId: 121212,
  //   //   smallIcon: 'ic_notification',
  //   //   ...options,
  //   // });
  // };

  const initial = async () => {
    await firebase.initializeApp();
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // when in foreground state
      console.log('foreground onMessage ==>', remoteMessage);
      // when use @aws-amplify/pushnotification
      // sendLocalNotification({
      //   title: remoteMessage.data.title || '',
      //   message: remoteMessage.data.message || '',
      // });
      // when use react-native-push-notification
      // sendLocalNotification({
      //   title: remoteMessage.notification.title || '',
      //   message: remoteMessage.notification.body || '',
      // });
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      },
    );

    return unsubscribe;
  }, []);
  // var firebaseConfig = {
  //   apiKey: 'AIzaSyCE10L3sEGMb4qtouUWA810yIfFqZAtH8A',
  //   authDomain: ' <Provided by Firebase> ',
  //   projectId: 'livesanjivani-e363f',
  //   storageBucket: 'livesanjivani-e363f.appspot.com',
  //   databaseURL: ' <Provided by Firebase> ',
  //   messagingSenderId: ' <Provided by Firebase> ',
  //   appId: '1:834345542564:android:e45570205cd49c034e9731',
  //   measurementId: ' <Provided by Firebase> ',
  // };
  useEffect(() => {
    // initial();
    // await Firebase.initializeApp();
    Amplify.configure(awsconfig);
    PushNotification.configure(awsconfig);
    // firebase.initializeApp(firebaseConfig);
    notificationData();
    notificationOpen();
  }, []);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LocalizationContext.Provider value={localizationContext}>
          <View style={{flex: 1}}>
            <Host>
              <DoubleTapToClose />
              <MainStackNavigation />
            </Host>
          </View>
        </LocalizationContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
