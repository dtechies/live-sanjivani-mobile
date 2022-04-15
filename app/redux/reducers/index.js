import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';

import themeMode from './AppThemeReducer';
import languageMode from './AppLanguageReducer';
import loginReducer from './LoginReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  currentThemeMode: themeMode,
  currentLanguageMode: languageMode,
  loginReducer: loginReducer,
});

const rootReducer = (state, action) => {
  // console.log('ACTIONS', action);

  // Clear all data in redux store to initial.
  // if (action.type === 'USER_LOGOUT') {
  //   AsyncStorage.removeItem('persist:root');
  // }

  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
