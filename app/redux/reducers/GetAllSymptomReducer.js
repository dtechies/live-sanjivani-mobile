import * as Actions from '../Types';

const initialState = {
  getAllSymptomResponse: [],
};

const getAllSymptomReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_ALL_SYMPTOM:
      return {...state, getAllSymptomResponse: payload};
    default:
      return state;
  }
};

export default getAllSymptomReducer;
