import * as Actions from '../Types';

const initialState = {
  addMedicineReminderResponse: [],
};

const addMedicineReminderReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.ADD_MEDICINE_REMINDER:
      return {...state, addMedicineReminderResponse: payload};
    default:
      return state;
  }
};

export default addMedicineReminderReducer;
