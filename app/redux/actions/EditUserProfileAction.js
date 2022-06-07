import * as actions from '../Types';
import {_editProfileDetails} from 'services';

export const editUserProfile = body => {
  console.log('EditUserProfile body := ', body);
  return dispatch => {
    dispatch({type: actions.EDIT_PROFILE_DETAILS});
    return _editProfileDetails(body)
      .then(response => {
        // console.log('EditUserProfile Response := ', response);
        dispatch({
          type: actions.EDIT_PROFILE_DETAILS,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('EditUserProfile Error Response :=\n', error);
        dispatch({type: actions.EDIT_PROFILE_DETAILS, payload: error});
        return error;
      });
  };
};
