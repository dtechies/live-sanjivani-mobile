import HttpCalls from './HttpCalls';
import {headersData} from './Services';
import {store} from './../redux';
import {getCredentials} from 'utils';
import {userLogOut, userData} from 'redux-actions';

const getToken = async () => {
  let res = await getCredentials();
  // console.log('getCredentials Response ==>', res);
  if (res) {
    return res.token;
  } else {
    await store.dispatch(userLogOut());
    await store.dispatch(userData({login: false}));
    // navigation.navigate('authStackNavigation', {screen: 'loginScreen'});
  }
};
export const _getAllCategory = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/all-category', headers);
};
export const _getOTP = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/get-OTP', headers, payload);
};

export const _refreshToken = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/get-refresh-token', headers, payload);
};

export const _userLogin = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/user-login', headers, payload);
};
export const _registerUser = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    type: 'application/json',
  });
  return _api_calls('POST', '/register-user', headers, payload);
};
export const _addOtherData = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls(
    'POST',
    '/add-user-cat-subcategory-values',
    headers,
    payload,
  );
};
export const _getMedicineReminderProfile = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/get-medicine-reminder-profile', headers);
};
export const _getMedicineReminderView = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/add-medicine-reminder-view', headers);
};
export const _addMedicineReminder = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    type: 'multipart/form-data',
    token: token,
  });
  return _api_calls('POST', '/add-medicine-reminder', headers, payload);
};
export const _getAllCategoryAndSubCategory = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/all_cat_subcategory', headers);
};
export const _addAppointmentReminderView = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/add-appointment-reminder-view', headers);
};
export const _getAllSubCategory = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/all-subcategory', headers);
};
export const _getHelpSupportData = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/get-helpsupport-data', headers);
};

export const _getUserProfileData = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/get-user-profile-data', headers);
};

export const _getTipForDayData = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });

  return _api_calls('GET', '/get-tip-for-day', headers);
};

export const _addSubcategory = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-subcategory-value', headers, payload);
};
export const _getAppointmentReminder = async body => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/get-appointment-reminder-profile', headers, body);
};
export const _getTodayMedicationList = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/medication-list', headers, payload);
};
export const _userFavoritesList = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/user-favorites-list', headers);
};

export const _addUserFavorites = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-user-favorites', headers, payload);
};
export const _addCareGiver = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-user-CareGiver', headers, payload);
};
export const _editProfileDetails = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    type: 'multipart/form-data',
    token: token,
  });
  return _api_calls('POST', '/edit-user-profile', headers, payload);
};
export const _addAppointmentReminder = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    type: 'multipart/form-data',
    token: token,
  });
  return _api_calls('POST', '/add-appointment-reminder', headers, payload);
};
export const _getUserFavSubCategoryPdf = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/get-user-favSubCategories-pdf', headers, payload);
};
export const _editMedicineReminderStatus = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/edit-medicine-reminder-status', headers, payload);
};
export const _editAppointmentReminderStatus = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls(
    'POST',
    '/edit-appointment-reminder-status',
    headers,
    payload,
  );
};
export const _addEditPlayerId = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-edit-player-id', headers, payload);
};
export const _editReminderStatus = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/edit-reminder-status', headers, payload);
};
export const _subCategoryGraph = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/subcategory-graph', headers, payload);
};
export const _getCareGiverList = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/get-caregiver', headers);
};
export const _getCareGiverDelete = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('DELETE', '/delete-caregiver', headers, payload);
};
export const _getAllSymptom = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/all-symptom', headers);
};
export const _addEditMedicalJournalNote = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    type: 'multipart/form-data',
    token: token,
  });
  return _api_calls('POST', '/add-medical-journal-note', headers, payload);
};
export const _getUserMedicalJournalNote = async () => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/get-user-medical-journal-note', headers);
};
export const _getDeleteMedicalJournalNote = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('DELETE', '/delete-medical-journal-note', headers, payload);
};
export const _storeOTP = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/store-OTP', headers, payload);
};
export const _addFeedback = async payload => {
  let {_api_calls} = HttpCalls;
  const token = await getToken();

  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-feedback', headers, payload);
};
