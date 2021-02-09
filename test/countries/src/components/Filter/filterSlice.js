import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  continent: 'EU',
  currency: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.search = action.payload;
    },
    setContinentValue(state, action) {
      state.continent = action.payload;
    },
    setCurrencyValue(state, action) {
      state.currency = action.payload;
    }
  }
});

export const {
  setSearchValue,
  setContinentValue,
  setCurrencyValue
} = filterSlice.actions;
export default filterSlice.reducer;
