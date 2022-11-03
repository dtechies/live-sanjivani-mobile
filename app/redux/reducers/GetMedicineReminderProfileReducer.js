import * as Actions from '../Types';

const initialState = {
  getMedicineReminderProfileResponse: [],
};

const getMedicineReminderProfileReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_MEDICINE_REMINDER_PROFILE:
      return {...state, getMedicineReminderProfileResponse: payload};
    default:
      return state;
  }
};

export default getMedicineReminderProfileReducer;
