import * as actions from '../Types';
import {_getDeleteMedicalJournalNote} from 'services';
export const GetDeleteMedicalJournalNoteAction = body => {
  return dispatch => {
    dispatch({type: actions.USER_MEDICAL_JOURNAL_DELETE});
    _getDeleteMedicalJournalNote;
    return _getDeleteMedicalJournalNote(body)
      .then(response => {
        dispatch({
          type: actions.USER_MEDICAL_JOURNAL_DELETE,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.USER_MEDICAL_JOURNAL_DELETE, payload: error});
        return error;
      });
  };
};
