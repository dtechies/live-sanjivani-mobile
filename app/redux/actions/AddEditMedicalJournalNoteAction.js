import * as actions from '../Types';
import {_addEditMedicalJournalNote} from 'services';

export const addEditMedicalJournalNote = body => {
  return dispatch => {
    dispatch({type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE});
    return _addEditMedicalJournalNote(body)
      .then(response => {
        // console.log('addEditMedicalJournalNote Response := ', response);
        if (response) {
          dispatch({
            type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        // console.log('addEditMedicalJournalNote Error Response :=\n', error);
        dispatch({type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE, payload: error});
        return error;
      });
  };
};
