const initialState = {
  categories: [],
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return { ...state };
  }
};

export default Category;
