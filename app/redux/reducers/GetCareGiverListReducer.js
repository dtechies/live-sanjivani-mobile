import * as Actions from '../Types';

const initialState = {
  getCareGiverListResponse: [],
};

const GetCareGiverListReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.CARE_GIVER_LIST:
      return {...state, getCareGiverListResponse: payload};
    default:
      return state;
  }
};

export default GetCareGiverListReducer;
