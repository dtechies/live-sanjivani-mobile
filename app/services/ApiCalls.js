import HttpCalls from './HttpCalls';
import {headersData} from './Services';
import {store, persistor} from './../redux';
// console.log('store,', store.getState().userDataReducer.userDataResponse);
let token = store.getState().userDataReducer.userDataResponse.login
  ? store.getState().userDataReducer.userDataResponse.userData.token
  : '';
export const _getAllCategory = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    type: 'multipart/form-data',
    token: token,
  });
  return _api_calls('GET', '/all-category', headers);
};
export const _getOTP = async payload => {
  // console.log('_getOTP_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/get-OTP', headers, payload);
};
export const _userLogin = async payload => {
  // console.log('_userLogin_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/user-login', headers, payload);
};
export const _registerUser = async payload => {
  // console.log('_registerUser_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/register-user', headers, payload);
};
export const _getMedicineReminderProfile = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: `${token}`,
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/get-medicine-reminder-profile', headers);
};
export const _getMedicineReminderView = async () => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: `${token}`,
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/add-medicine-reminder-view', headers);
};
export const _addMedicineReminder = async payload => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
    token: `${token}`,
  });
  return _api_calls('POST', '/add-medicine-reminder', headers, payload);
};
export const _getAllCategoryAndSubCategory = async () => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: token,
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/all_cat_subcategory', headers);
};
export const _addAppointmentReminderView = async () => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: token,
  });
  // console.log('headers _addAppointmentReminderView ==>', headers);
  return _api_calls('GET', '/add-appointment-reminder-view', headers);
};
export const _getAllSubCategory = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  return _api_calls('GET', '/all-subcategory', headers);
};
export const _getHelpSupportData = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  console.log('headers _getHelpSupportData ==>', headers);
  return _api_calls('GET', '/get-helpsupport-data', headers);
};

export const _addSubcategory = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-subcategory-value', headers, payload);
};
export const _getAppointmentReminder = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/get-appointment-reminder-profile', headers);
};
export const _userFavoritesList = async () => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/user-favorites-list', headers);
};

export const _addUserFavorites = async payload => {
  // console.log('_getOTP_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-user-favorites', headers, payload);
};
export const _addCareGiver = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    token: token,
  });
  return _api_calls('POST', '/add-user-CareGiver', headers, payload);
};
export const _editProfileDetails = async payload => {
  let {_api_calls} = HttpCalls;
  let headers = await headersData({
    type: 'multipart/form-data',
    token: token,
  });
  return _api_calls('POST', '/add-edit-user-profile', headers, payload);
};
