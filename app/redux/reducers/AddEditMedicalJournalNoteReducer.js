import * as Actions from '../Types';

const initialState = {
  addEditMedicalJournalNoteResponse: [],
};

const addEditMedicalJournalNoteReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_EDIT_MEDICAL_JOURNAL_NOTE:
      return {...state, addEditMedicalJournalNoteResponse: payload};
    default:
      return state;
  }
};

export default addEditMedicalJournalNoteReducer;
