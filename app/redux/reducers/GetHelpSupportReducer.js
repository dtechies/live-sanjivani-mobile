import * as Actions from '../Types';

const initialState = {
  getHelpSupportResponse: [],
};

const getHelpSupportReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.GET_HELP_SUPPORT:
      return {...state, getHelpSupportResponse: payload};
    default:
      return state;
  }
};

export default getHelpSupportReducer;
