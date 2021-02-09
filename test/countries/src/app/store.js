import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../components/Filter/filterSlice.js';
import homePageReducer from '../pages/home/homePageSlice.js';

export default configureStore({
  reducer: {
    filter: filterReducer,
    homePage: homePageReducer
  }
});
