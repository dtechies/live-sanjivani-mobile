import * as actions from '../Types';
import {_subCategoryGraph} from 'services';

export const GetSubCategoryGraphs = payload => {
  return dispatch => {
    dispatch({type: actions.SUB_CAT_GRAPH});
    return _subCategoryGraph(payload)
      .then(response => {
        dispatch({
          type: actions.SUB_CAT_GRAPH,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.SUB_CAT_GRAPH, payload: error});
        return error;
      });
  };
};
