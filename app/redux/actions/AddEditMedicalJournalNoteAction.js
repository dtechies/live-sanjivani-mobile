import {BASE_URL} from 'config';
import * as actions from '../Types';

export const addEditMedicalJournalNote = (body, header) => {
  const {token} = header;
  // console.log('addEditMedicalJournalNote URL := ', url);
  // console.log('addEditMedicalJournalNote header := ', header);
  // console.log('addEditMedicalJournalNote body := ', body);
  // console.log('addEditMedicalJournalNote Response := ', response);
  return dispatch => {
    dispatch({type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE});
    let url = `${BASE_URL}/add-edit-medical-journal-note`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: body,
    })
      .then(res => res.json())
      .then(response => {
        // console.log('addEditMedicalJournalNote URL := ', url);
        // console.log('addEditMedicalJournalNote header := ', header);
        // console.log('addEditMedicalJournalNote body := ', body);
        // console.log('addEditMedicalJournalNote Response := ', response);
        if (response) {
          return dispatch({
            type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE,
            payload: response,
          });
        } else {
          return dispatch({
            type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('addEditMedicalJournalNote Error Response :=\n', error);
        dispatch({type: actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE, payload: error});
      });
  };
};
