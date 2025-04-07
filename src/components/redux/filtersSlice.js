import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;