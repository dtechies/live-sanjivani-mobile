import * as Actions from '../Types';

const initialState = {
  editMedicineReminderStatusResponse: [],
};

const EditMedicineReminderStatusReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.EDIT_MEDICINE_REMINDER_STATUS:
      return {...state, editMedicineReminderStatusResponse: payload};
    default:
      return state;
  }
};

export default EditMedicineReminderStatusReducer;
