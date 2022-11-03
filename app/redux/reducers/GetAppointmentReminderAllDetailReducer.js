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
    case Actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL:
      return {...state, getAppointmentReminderAllDetailResponse: payload};
    default:
      return state;
  }
};

export default getAppointmentReminderAllDetailReducer;
