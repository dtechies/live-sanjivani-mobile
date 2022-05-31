import * as Actions from '../Types';

const initialState = {
  getReminderOptionResponse: [],
};

const getReminderOptionReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_REMINDER_OPTION:
      return {...state, getReminderOptionResponse: payload};
    default:
      return state;
  }
};

export default getReminderOptionReducer;
