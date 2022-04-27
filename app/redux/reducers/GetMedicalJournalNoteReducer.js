import * as Actions from '../Types';

const initialState = {
  getMedicalJournalNoteResponse: [],
};

const getMedicalJournalNoteReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_MEDICAL_JOURNAL_NOTE:
      return {...state, getMedicalJournalNoteResponse: payload};
    default:
      return state;
  }
};

export default getMedicalJournalNoteReducer;
