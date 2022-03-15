import axios from 'axios';

const onUserLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'https://netflix-example.herokuapp.com/user/mock-login',
        { email, password },
      );
      dispatch({ type: 'DO_LOGIN', payload: response.data });
    } catch (error) {
      dispatch({ type: 'ON_ERROR', payload: error });
    }
  };
};

export default onUserLogin;
