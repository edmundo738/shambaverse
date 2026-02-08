import { createSlice } from '@reduxjs/toolkit';

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    products: [],
    status: 'idle',
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.status = 'ready';
    },
  },
});

export const { setProducts } = marketSlice.actions;
export default marketSlice.reducer;
