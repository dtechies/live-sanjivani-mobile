import * as actions from '../Types';

export const changeLanguage = language => {
  return dispatch => {
    dispatch({type: actions.APP_LANGUAGE, payload: language});
  };
};
