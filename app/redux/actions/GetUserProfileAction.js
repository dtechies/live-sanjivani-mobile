import * as actions from '../Types';
import {_getUserProfileData} from 'services';

export const getUserProfile = () => {
  return dispatch => {
    dispatch({type: actions.GET_USER_PROFILE});
    return _getUserProfileData()
      .then(response => {
        dispatch({
          type: actions.GET_USER_PROFILE,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.GET_USER_PROFILE, payload: error});
        return error;
      });
  };
};
