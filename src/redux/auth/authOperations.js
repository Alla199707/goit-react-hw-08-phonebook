import axios from 'axios';
import Notiflix from 'notiflix';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      Notiflix.Notify.success('Great!Now you are registered 👍', {
        position: 'center-top',
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        Notiflix.Notify.failure(
          "Please log in, you've been registered already",
          {
            position: 'center-top',
          }
        )
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      Notiflix.Notify.success('Welcome to your personal page 🗓', {
        position: 'center-top',
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        Notiflix.Notify.failure(
          'Oops,we dont have you. You should register first 😊',
          {
            position: 'center-top',
          }
        )
      );
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      Notiflix.Notify.success("Bye-bye 🙋‍♀️ You're successfully logged out!", {
        position: 'center-top',
      });
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
