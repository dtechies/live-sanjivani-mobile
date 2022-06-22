import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getMedicalJournalNote = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_MEDICAL_JOURNAL_NOTE});
    let url = `${BASE_URL}/get-medical-journal-note`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getMedicalJournalNote URL := ', url);
        // console.log('getMedicalJournalNote Header := ', header);
        // console.log('getMedicalJournalNote Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_MEDICAL_JOURNAL_NOTE,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_MEDICAL_JOURNAL_NOTE,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getMedicalJournalNote Action Error Response :=\n', error);
        dispatch({type: Actions.GET_MEDICAL_JOURNAL_NOTE, payload: error});
      });
  };
};
