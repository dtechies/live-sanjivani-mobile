import {store} from '../redux';
import {_refreshToken} from 'services';
import moment from 'moment';
import {userData} from 'redux-actions';

async function getAccessUsingRefresh(refreshToken) {
  return _refreshToken({refresh_token: refreshToken});
}

async function getVerifiedKeys(keys) {
  if (keys) {
    //   NOTE: checking actual token expiry
    if (!isTokenExpired(keys.tokenTime)) {
      //   NOTE: actual token is not expired
      return keys;
    } else {
      //   NOTE: actual token expired and now checking for refresh token expiry
      if (!isTokenExpired(keys.refreshTokenTime)) {
        //   NOTE: refresh token is not expired
        const res = await getAccessUsingRefresh(keys.refreshToken);
        // console.log('Updated Data ==>', res);
        console.log('Auth token is now refreshed');
        const currentDate = new moment().format('YYYY-MM-DD');
        var a = moment(res.data.user.dob);
        var b = moment(currentDate);
        var years = b.diff(a, 'year');
        b.add(years, 'years');
        // console.log('Refreshed USER DATA ==>', res.data.user);
        await store.dispatch(
          userData({userData: res.data.user, age: years, login: true}),
        );
        return res.data.user;
      } else {
        // NOTE: refresh expired, please login
        // console.log('refresh token expired');
        return null;
      }
    }
  } else {
    // NOTE: access not available please login
    return null;
  }
}

function isTokenExpired(expirationTime) {
  //   console.log('Token Expiration time ==>', expirationTime);
  if (expirationTime < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
}

export const getCredentials = async () => {
  try {
    const credentials = store.getState().userDataReducer.userDataResponse
      ? store.getState().userDataReducer.userDataResponse.userData
      : '';
    // console.log('token', credentials);
    let cred = await getVerifiedKeys(credentials);
    // console.log('verified credentials ==>', cred);
    if (credentials != null && cred != null) {
      return cred;
    } else {
      return null;
    }
  } catch (e) {
    // NOTE: Error for getting credentials
    console.log(e);
  }
  console.groupEnd();
  return null;
};
