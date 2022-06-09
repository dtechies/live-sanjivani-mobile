import * as Actions from '../Types';

const initialState = {
  GetSubCatGraph: [],
};

const GetSubCatGraph = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.SUB_CAT_GRAPH:
      return {...state, GetSubCatGraph: payload};
    default:
      return state;
  }
};

export default GetSubCatGraph;
