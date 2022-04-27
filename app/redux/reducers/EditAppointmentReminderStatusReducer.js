import * as Actions from '../Types';

const initialState = {
  editAppointmentReminderStatusResponse: [],
};

const editAppointmentReminderStatusReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.EDIT_APPOINTMENT_REMINDER_STATUS:
      return {...state, editAppointmentReminderStatusResponse: payload};
    default:
      return state;
  }
};

export default editAppointmentReminderStatusReducer;
