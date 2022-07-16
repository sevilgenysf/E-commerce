import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const productsReducer = createReducer(initialState, {
  allProductRequest: state => {
    state.Loading = true;
  },
  allProductSuccess: (state, action) => {
    state.Loading = false;
    state.products = action.payload.products;
    state.productsCount = action.payload.productsCount;
    state.resultPerPage = action.payload.resultPerPage;
  },
});
