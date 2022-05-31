import * as Actions from '../Types';

const initialState = {
  addAppointmentReminderResponse: [],
};

const addAppointmentReminderReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_APPOINTMENT_REMINDER:
      return {...state, addAppointmentReminderResponse: payload};
    default:
      return state;
  }
};

export default addAppointmentReminderReducer;
