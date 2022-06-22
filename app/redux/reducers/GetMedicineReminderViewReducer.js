import * as Actions from '../Types';

const initialState = {
  getMedicineDoctorDetailResponse: [],
};

const getMedicineReminderViewReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_MEDICINE_REMINDER_VIEW:
      return {...state, getMedicineDoctorDetailResponse: payload};
    default:
      return state;
  }
};

export default getMedicineReminderViewReducer;
