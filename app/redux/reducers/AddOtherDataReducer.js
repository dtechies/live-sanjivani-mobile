import * as Actions from '../Types';

const initialState = {
  addOtherDataResponse: [],
};

const addOtherScreenReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_OTHER_DATA:
      return {...state, addOtherDataResponse: payload};
    default:
      return state;
  }
};

export default addOtherScreenReducer;
