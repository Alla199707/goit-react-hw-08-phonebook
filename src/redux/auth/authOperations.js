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
      Notiflix.Notify.success('Чудово! Тепер ви зареєстровані 👍', {
        position: 'center-top',
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        Notiflix.Notify.failure('Увійдіть, будь ласка, ви вже зареєстровані', {
          position: 'center-top',
        })
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
      Notiflix.Notify.success('Ласкаво просимо на особисту сторінку', {
        position: 'center-top',
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        Notiflix.Notify.failure(
          'Ой, вас у нас немає. Ви повинні спочатку зареєструватися😊',
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
      Notiflix.Notify.success('До побачення 🙋‍♀️ Ви успішно вийшли!', {
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
