import * as Actions from '../Types';

const initialState = {
  getTipForDayResponse: [],
};

const getTipForDayReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_TIP_FOR_DAY:
      return {...state, getTipForDayResponse: payload};
    default:
      return state;
  }
};

export default getTipForDayReducer;
