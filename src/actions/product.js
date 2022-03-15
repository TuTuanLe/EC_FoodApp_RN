export const onFetchProduct = () => {
  return async (dispatch) => {
    try {
      const response = {
        data: [
          {
            id: '1',
            name: 'Meat Pizza',
            ingredients: 'Mixed Pizza',
            price: '8.30',
            image: require('@src/assets/images/meatPizza.png'),
          },
          {
            id: '2',
            name: 'Cheese Pizza',
            ingredients: 'Cheese Pizza',
            price: '7.10',
            image: require('@src/assets/images/cheesePizza.png'),
          },
          {
            id: '3',
            name: 'Chicken Burger',
            ingredients: 'Fried Chicken',
            price: '5.10',
            image: require('@src/assets/images/chickenBurger.png'),
          },
          {
            id: '4',
            name: 'Sushi Makizushi',
            ingredients: 'Salmon Meat',
            price: '9.55',
            image: require('@src/assets/images/sushiMakizushi.png'),
          },
        ],
      };
      dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'ON_ERROR', payload: error });
    }
  };
};
