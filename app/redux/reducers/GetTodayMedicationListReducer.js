import * as Actions from '../Types';

const initialState = {
  getTodayMedicationListResponse: [],
};

const getTodayMedicationListReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.TODAY_MEDICATION_LIST:
      return {...state, getTodayMedicationListResponse: payload};
    default:
      return state;
  }
};

export default getTodayMedicationListReducer;
