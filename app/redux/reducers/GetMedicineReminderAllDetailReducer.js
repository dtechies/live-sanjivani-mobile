import * as Actions from '../Types';

const initialState = {
  getMedicineAllDetailResponse: [],
};

const getMedicineAllDetailReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_MEDICINE_REMINDER_ALL_DETAIL:
      return {...state, getMedicineAllDetailResponse: payload};
    default:
      return state;
  }
};

export default getMedicineAllDetailReducer;
