import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
  },
  reducers: {
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.status = 'authenticated';
    },
    signOut: (state) => {
      state.user = null;
      state.status = 'idle';
    },
  },
});

export const { signInSuccess, signOut } = authSlice.actions;
export default authSlice.reducer;
