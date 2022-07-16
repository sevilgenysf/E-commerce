import {configureStore} from '@reduxjs/toolkit';
import {productsReducer} from './Reducers/ProductReducer';

const Store = configureStore({
  reducer: {},
});

export default Store;
