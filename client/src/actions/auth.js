import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

const register =
  ({ name, email, password }) =>
  async (dispactch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //preparing data to send
    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post('/api/users', body, config);

      dispactch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          dispactch(setAlert(error.msg, 'danger', 3000))
        );
      }
      dispactch({
        type: REGISTER_FAIL,
      });
    }
  };

export default register;
