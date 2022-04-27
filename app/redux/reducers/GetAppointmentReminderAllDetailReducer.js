import * as Actions from '../Types';

const initialState = {
  getAppointmentReminderAllDetailResponse: [],
};

const getAppointmentReminderAllDetailReducer = (
  state = initialState,
  action,
) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_APPOINTMENT_REMINDER_PROFILE:
      return {...state, getAppointmentReminderAllDetailResponse: payload};
    default:
      return state;
  }
};

export default getAppointmentReminderAllDetailReducer;
