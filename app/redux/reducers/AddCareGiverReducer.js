import * as Actions from '../Types';

const initialState = {
  addCareGiverResponse: [],
};

const addCareGiverReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_SUBCATEGORY:
      return {...state, addCareGiverResponse: payload};
    default:
      return state;
  }
};

export default addCareGiverReducer;
