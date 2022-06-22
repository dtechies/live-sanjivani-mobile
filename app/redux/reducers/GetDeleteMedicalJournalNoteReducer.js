import * as Actions from '../Types';

const initialState = {
  getJournalDeleteResponse: [],
};

const GetDeleteMedicalJournalNoteReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.USER_MEDICAL_JOURNAL_DELETE:
      return {...state, getJournalDeleteResponse: payload};
    default:
      return state;
  }
};

export default GetDeleteMedicalJournalNoteReducer;
