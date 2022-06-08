import * as Actions from '../Types';

const initialState = {
  editReminderStatusResponse: [],
};

const editReminderStatusReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.EDIT_REMINDER_STATUS:
      return {...state, editReminderStatusResponse: payload};
    default:
      return state;
  }
};

export default editReminderStatusReducer;
