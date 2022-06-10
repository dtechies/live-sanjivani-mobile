import * as Actions from '../Types';

const initialState = {
  deleteCareGiverResponse: [],
};

const DeleteCareGiverReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.CARE_GIVER_LIST_DELETE:
      return {...state, deleteCareGiverResponse: payload};
    default:
      return state;
  }
};

export default DeleteCareGiverReducer;
