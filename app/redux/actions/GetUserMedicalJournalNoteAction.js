import * as actions from '../Types';

import {_getUserMedicalJournalNote} from 'services';

export const GetUserMedicalJournalNoteAction = () => {
  return dispatch => {
    dispatch({type: actions.USER_MEDICAL_JOURNAL});
    return _getUserMedicalJournalNote()
      .then(response => {
        dispatch({
          type: actions.USER_MEDICAL_JOURNAL,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        console.log('_getUserMedicalJournalNote Error Response :=\n', error);
        dispatch({type: actions.USER_MEDICAL_JOURNAL, payload: error});
        return error;
      });
  };
};
