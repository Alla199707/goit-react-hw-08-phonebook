import { addContactItem, deleteContactItem, fetchContacts } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const arrActions = [fetchContacts, addContactItem, deleteContactItem];

const getActions = type => arrActions.map(action => action[type]);
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfild = state => {
  state.isLoading = false;
  state.error = '';
};
const handleFulfildAll = (state, { payload }) => {
  state.contacts = payload;
};

const handleFulfildAdd = (state, { payload }) => {
  state.contacts.push(payload);
};

export const handleFulfildDelete = (state, action) => {
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfildAll)
      .addCase(deleteContactItem.fulfilled, handleFulfildDelete)
      .addCase(addContactItem.fulfilled, handleFulfildAdd)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfild);
  },
});

export const contactsReducer = ContactSlice.reducer;
