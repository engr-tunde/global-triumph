import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    checkLoginStatus: async (state) => {
      const user = localStorage.getItem('user');
      if (user) {
        console.log('user', user);
        const url = `${process.env.REACT_APP_API_URL}/users/dashboard`;
        axios
          .get(url, { withCredentials: true })
          .then((response) => {
            console.log('response', response);
            if (response.status !== 200) {
              state.isLoggedIn = false;
              state.user = null;
              state.loading = false;
              state.error = null;
              localStorage.removeItem('user');
            } else {
              state.isLoggedIn = true;
              state.user = user;
              state.loading = false;
              state.error = null;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem('user', action.payload);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('user');
    },
  },
});

export const { checkLoginStatus, loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const getUser = (state) => state.user.user;

export default authSlice.reducer;

// export const store = configureStore({
//   reducer: authSlice.reducer,
// });
