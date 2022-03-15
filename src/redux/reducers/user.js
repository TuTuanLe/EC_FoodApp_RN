const initialState = {
  lastName: '',
  firstName: '',
};

const User = (state = {}, action) => {
  switch (action.type) {
    case 'DO_LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'ON_ERROR':
      return {
        ...state,
        appError: action.payload,
      };
    default:
      return { ...state };
  }
};

export default User;
