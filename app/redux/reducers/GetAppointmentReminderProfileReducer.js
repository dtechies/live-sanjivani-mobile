import * as Actions from '../Types';

const initialState = {
  getAppointmentReminderProfileResponse: [],
};

const getAppointmentReminderProfileReducer = (state = initialState, action) => {
  const {type, payload} = action;
  console.log('bhavya payload', payload);
  switch (type) {
    case Actions.GET_APPOINTMENT_REMINDER_PROFILE:
      return {...state, getAppointmentReminderProfileResponse: payload};
    default:
      return state;
  }
};

export default getAppointmentReminderProfileReducer;
