import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userData: null, 
    token: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload.user; // Info from server
      state.token = action.payload.token;   // Security token from server
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      state.token = null;
    }
  }
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;