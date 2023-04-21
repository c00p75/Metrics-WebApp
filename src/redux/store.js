import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countrySlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
