import * as actions from '../Types';

export const changeTheme = theme => {
  return dispatch => {
    dispatch({type: actions.APP_THEME, payload: theme});
  };
};
