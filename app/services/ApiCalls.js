import HttpCalls from './HttpCalls';

import {headersData} from './Services';

export const _getAllCategory = async payload => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2Jfbm8iOiI3MDQ2ODkyOTczIiwidXNlcl9pZCI6MzcsImlhdCI6MTY1MzU2MTAzOSwiZXhwIjoxNjUzNjQ3NDM5fQ.n0tOFnS5ePZ3xJtBywER4f6JW-CkAHai5k05QeSzxWQ',
  });
  return _api_calls('GET', '/all-category', headers);
};

export const _getOTP = async payload => {
  // console.log('_getOTP_payload ==> ', payload);
  let {_api_calls} = HttpCalls;
  let headers = await headersData({});
  return _api_calls('POST', '/get-OTP', headers, payload);
};

export const _getMedicineReminderProfile = async token => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
    token: `Bearer ${token}`,
  });
  // console.log('headers ==>', headers);
  return _api_calls('GET', '/get-medicine-reminder-profile', headers);
};
