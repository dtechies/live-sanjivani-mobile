import * as Actions from '../Types';

const initialState = {
  playerIdResponse: '',
};

const addEditPlayerIdReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_EDIT_PLAYER_ID:
      return {...state, registerResponse: payload};
    default:
      return state;
  }
};

export default addEditPlayerIdReducer;
