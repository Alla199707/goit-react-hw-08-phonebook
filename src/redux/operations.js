import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAll } from './servirces/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectedWithValue }) => {
    try {
      const contacts = await fetchAll();

      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addContactItem = createAsyncThunk(
  'contacts/addContact',
  async (text, { rejectedWithValue }) => {
    try {
      const contacts = await addContact(text);

      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const deleteContactItem = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectedWithValue }) => {
    try {
      const contacts = await deleteContact(id);

      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
