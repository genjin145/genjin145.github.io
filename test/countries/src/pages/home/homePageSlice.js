import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: 1,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    }
  }
});

export const { setCurrent } = homePageSlice.actions;
export default homePageSlice.reducer;
