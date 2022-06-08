import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';

import themeMode from './AppThemeReducer';
import languageMode from './AppLanguageReducer';
import loginReducer from './LoginReducer';
import registerReducer from './RegisterReducer';
import userDataReducer from './UserDataReducer';
import getReminderOptionReducer from './GetReminderOptionReducer';
import getMedicalJournalNoteReducer from './GetMedicalJournalNoteReducer';
import addEditMedicalJournalNoteReducer from './AddEditMedicalJournalNoteReducer';
import getAllCategoryReducer from './GetAllCategoryReducer';
import getAllCategoryAndSubCategoryReducer from './getAllCategoryAndSubCategoryReducer';
import getHelpSupportReducer from './GetHelpSupportReducer';
import getUserFavoriteListReducer from './GetUserFavoriteListReducer';
import addUserFavoriteReducer from './AddUserFavoriteReducer';
import getAllSubCategoryReducer from './GetAllSubCategoryReducer';
import getTipForDayReducer from './GetTipForDayReducer';
import addMedicineReminderReducer from './AddMedicineReminderReducer';
import getMedicineReminderProfileReducer from './GetMedicineReminderProfileReducer';
import editMedicineReminderStatusReducer from './EditMedicineReminderStatusReducer';
import getMedicineReminderViewReducer from './GetMedicineReminderViewReducer';
import getMedicineAllDetailReducer from './GetMedicineReminderAllDetailReducer';
import getAppointmentReminderProfileReducer from './GetAppointmentReminderProfileReducer';
import addAppointmentReminderReducer from './AddAppointmentReminderReducer';
import getAppointmentReminderAllDetailReducer from './GetAppointmentReminderAllDetailReducer';
import getSubCategoryDataReducer from './getSubCategoryDataReducer';
import getOtpReducer from './GetOtpReducer';
import addSubcategoryReducer from './AddSubcategoryReducer';
import addCareGiverReducer from './AddCareGiverReducer';
import editUserProfileReducer from './EditUserProfileReducer';
import userLogOutReducer from './UserLogoutReducer';
import getUserProfileReducer from './GetUserProfileReducer';
import GetUserFavSubCategoryPdfReducer from './GetUserFavSubCategoryPdfReducer';
import getTodayMedicationListReducer from './GetTodayMedicationListReducer';
import addEditPlayerIdReducer from './AddEditPlayerIdReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  currentThemeMode: themeMode,
  currentLanguageMode: languageMode,
  loginReducer: loginReducer,
  registerReducer: registerReducer,
  userDataReducer: userDataReducer,
  getReminderOptionReducer: getReminderOptionReducer,
  getMedicalJournalNoteReducer: getMedicalJournalNoteReducer,
  addEditMedicalJournalNoteReducer: addEditMedicalJournalNoteReducer,
  getAllCategoryReducer: getAllCategoryReducer,
  getAllCategoryAndSubCategoryReducer: getAllCategoryAndSubCategoryReducer,
  getHelpSupportReducer: getHelpSupportReducer,
  getUserFavoriteListReducer: getUserFavoriteListReducer,
  addUserFavoriteReducer: addUserFavoriteReducer,
  getAllSubCategoryReducer: getAllSubCategoryReducer,
  getTipForDayReducer: getTipForDayReducer,
  addMedicineReminderReducer: addMedicineReminderReducer,
  getMedicineReminderProfileReducer: getMedicineReminderProfileReducer,
  editMedicineReminderStatusReducer: editMedicineReminderStatusReducer,
  getMedicineReminderViewReducer: getMedicineReminderViewReducer,
  getMedicineAllDetailReducer: getMedicineAllDetailReducer,
  getAppointmentReminderProfileReducer: getAppointmentReminderProfileReducer,
  addAppointmentReminderReducer: addAppointmentReminderReducer,
  getAppointmentReminderAllDetailReducer:
    getAppointmentReminderAllDetailReducer,
  getSubCategoryDataReducer: getSubCategoryDataReducer,
  getOtpReducer: getOtpReducer,
  addSubcategoryReducer: addSubcategoryReducer,
  addCareGiverReducer: addCareGiverReducer,
  editUserProfileReducer: editUserProfileReducer,
  userLogOutReducer: userLogOutReducer,
  getUserProfileReducer: getUserProfileReducer,
  GetUserFavSubCategoryPdfReducer: GetUserFavSubCategoryPdfReducer,
  getTodayMedicationListReducer: getTodayMedicationListReducer,
  addEditPlayerIdReducer: addEditPlayerIdReducer,
});
const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === 'USER_LOGOUT') {
    AsyncStorage.removeItem('persist:root');

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
