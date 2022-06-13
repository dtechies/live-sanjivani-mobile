import HttpCalls from './HttpCalls';
import {headersData} from './Services';
import {store} from './../redux';
export const _getAllCategory = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('GET', '/all-category', headers);
};
export const _getOTP = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  // console.log('_getOTP_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/get-OTP', headers, payload);
};
export const _userLogin = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  // console.log('_userLogin_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/user-login', headers, payload);
};
export const _registerUser = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  // console.log('_registerUser_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    type: 'application/json',
  });
  return _api_calls('POST', '/register-user', headers, payload);
};
export const _addOtherData = async payload => {
  // console.log('_addOtherData ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls(
    'POST',
    '/add-user-cat-subcategory-values',
    headers,
    payload,
  );
};
export const _getMedicineReminderProfile = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/get-medicine-reminder-profile', headers);
};
export const _getMedicineReminderView = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/add-medicine-reminder-view', headers);
};
export const _addMedicineReminder = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/add-medicine-reminder', headers, payload);
};
export const _getAllCategoryAndSubCategory = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==> ', headers, token);
  return _api_calls('GET', '/all_cat_subcategory', headers);
};
export const _addAppointmentReminderView = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _addAppointmentReminderView ==>', headers);
  return _api_calls('GET', '/add-appointment-reminder-view', headers);
};
export const _getAllSubCategory = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('header-all-subcategory', headers);
  return _api_calls('GET', '/all-subcategory', headers);
};
export const _getHelpSupportData = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _getHelpSupportData ==>', headers);
  return _api_calls('GET', '/get-helpsupport-data', headers);
};

export const _getUserProfileData = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _getUserProfileData ==>', headers);
  return _api_calls('GET', '/get-user-profile-data', headers);
};

export const _getTipForDayData = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _getUserProfileData ==>', headers);
  return _api_calls('GET', '/get-tip-for-day', headers);
};

export const _addSubcategory = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/add-subcategory-value', headers, payload);
};
export const _getAppointmentReminder = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/get-appointment-reminder-profile', headers);
};
export const _getTodayMedicationList = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/medication-list', headers);
};
export const _userFavoritesList = async () => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/user-favorites-list', headers);
};

export const _addUserFavorites = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  // console.log('_getOTP_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/add-user-favorites', headers, payload);
};
export const _addCareGiver = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/add-user-CareGiver', headers, payload);
};
export const _editProfileDetails = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    type: 'multipart/form-data',
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/edit-user-profile', headers, payload);
};
export const _addAppointmentReminder = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    type: 'multipart/form-data',
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/add-appointment-reminder', headers, payload);
};
export const _getUserFavSubCategoryPdf = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/get-user-favSubCategories-pdf', headers, payload);
};
export const _editMedicineReminderStatus = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/edit-medicine-reminder-status', headers, payload);
};
export const _editAppointmentReminderStatus = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers ==>', headers);
  return _api_calls(
    'POST',
    '/edit-appointment-reminder-status',
    headers,
    payload,
  );
};
export const _addEditPlayerId = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('vvvv', 'POST', '/add-edit-player-id', headers, payload);
  return _api_calls('POST', '/add-edit-player-id', headers, payload);
};
export const _editReminderStatus = async payload => {
  // let token = store.getState().userDataReducer.userDataResponse.login
  //   ? store.getState().userDataReducer.userDataResponse.userData.token
  //   : '';
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/edit-reminder-status', headers, payload);
};
export const _subCategoryGraph = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/subcategory-graph', headers, payload);
};
export const _getCareGiverList = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _getUserProfileData ==>', headers);
  return _api_calls('GET', '/get-caregiver', headers);
};
export const _getCareGiverDelete = async body => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  console.log('headers _getCareGiverDelete ==>', headers);
  return _api_calls('DELETE', '/delete-caregiver', headers, body);
};
export const _getAllSymptom = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('header-all-symptom', headers);
  return _api_calls('GET', '/all-symptom', headers);
};
export const _addEditMedicalJournalNote = async payload => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  return _api_calls('POST', '/add-medical-journal-note', headers, payload);
};
export const _getUserMedicalJournalNote = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _getUserProfileData ==>', headers);
  return _api_calls('GET', '/get-user-medical-journal-note', headers);
};
export const _getDeleteMedicalJournalNote = async body => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: store.getState().userDataReducer.userDataResponse.login
      ? store.getState().userDataReducer.userDataResponse.userData.token
      : '',
  });
  // console.log('headers _getUserProfileData ==>', headers);
  return _api_calls('DELETE', '/delete-medical-journal-note', headers, body);
};
