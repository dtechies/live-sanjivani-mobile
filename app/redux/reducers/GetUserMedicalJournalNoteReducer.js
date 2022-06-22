import * as Actions from '../Types';

const initialState = {
  getMedicalJournalResponse: [],
};

const GetUserMedicalJournalNoteReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.USER_MEDICAL_JOURNAL:
      return {...state, getMedicalJournalResponse: payload};
    default:
      return state;
  }
};

export default GetUserMedicalJournalNoteReducer;
