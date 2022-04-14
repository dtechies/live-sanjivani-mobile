import React, {useState, useMemo, createContext} from 'react';
import {View, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as RNLocalize from 'react-native-localize';
import {Host} from 'react-native-portalize';
import i18n from 'i18n-js';

import {store, persistor} from './redux';
import {MainStackNavigation} from './navigation';
import DoubleTapToClose from './utils/hooks/back-double-press';

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
