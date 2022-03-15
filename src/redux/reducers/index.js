import Product from './product';
import User from './user';
import { combineReducers } from 'redux';
import Category from './category';
const rootReducer = combineReducers({
  Product,
  User,
  Category,
});

export default rootReducer;
