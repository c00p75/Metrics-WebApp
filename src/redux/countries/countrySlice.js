import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const COUNTRIES = 'App/redux/countries/COUNTRIES';

const initialState = {
  countries: [],
  isLoading: true,
  error: null,
  currentPage: 'none',
  search: '',
};

export const fetchCountries = createAsyncThunk(
  COUNTRIES, async () => {
    try {
      const data = await fetch('https://restcountries.com/v3.1/all');
      return data.json();
    } catch (e) {
      return e.message;
    }
  },
);

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    navigation(state, action) {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    searchFocus(state, action) {
      return {
        ...state,
        search: action.payload,
      };
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        countries: action.payload,
        isLoading: false,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export const { fetchData, navigation, searchFocus } = countrySlice.actions;
export default countrySlice.reducer;
