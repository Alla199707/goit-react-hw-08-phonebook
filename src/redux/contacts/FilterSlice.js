const { createSlice } = require('@reduxjs/toolkit');

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilterContacts: (state, action) => action.payload,
  },
});

export const { getFilterContacts } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;
