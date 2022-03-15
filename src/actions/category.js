const onFetchCategory = () => {
  return async (dispatch) => {
    try {
      const response = {
        data: [
          {
            id: '1',
            name: 'pizza',
            image: require('@src/assets/images/catergories/pizza.png'),
          },
          {
            id: '2',
            name: 'Burger',
            image: require('@src/assets/images/catergories/burger.png'),
          },
          {
            id: '3',
            name: 'Sushi',
            image: require('@src/assets/images/catergories/sushi.png'),
          },
          {
            id: '4',
            name: 'Salad',
            image: require('@src/assets/images/catergories/salad.png'),
          },
        ],
      };
      dispatch({ type: 'FETCH_CATEGORIES', payload: response.data });
    } catch (error) {
      dispatch({ type: 'ON_ERROR', payload: error });
    }
  };
};

export default onFetchCategory;
