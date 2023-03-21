import { SET_ALERT, REMOVE_ALERT } from './types';
const { v4: uuidv4 } = require('uuid');

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};
