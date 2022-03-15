const initialState = {
  products: [],
  appError: '',
};
const Product = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        products: action.payload,
      };
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
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

export default Product;
