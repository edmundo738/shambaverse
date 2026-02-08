import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const mockFeed = [
  {
    id: 1,
    type: 'post',
    author: 'Cooperativa Nova Vida',
    content: 'Colheita de milho começou hoje em Malanje! 🌽',
    timestamp: 'há 2 horas',
  },
  {
    id: 2,
    type: 'market',
    title: 'Feijão catarino',
    price: 1800,
    unit: 'por saco',
    quantity: '40 sacos disponíveis',
    location: 'Huambo',
    seller: 'Sra. Joana',
    emoji: '🫘',
  },
  {
    id: 3,
    type: 'service',
    title: 'Transporte refrigerado',
    route: 'Luanda ↔ Benguela',
    capacity: '12 toneladas',
  },
  {
    id: 4,
    type: 'alert',
    title: 'Alerta de praga',
    description: 'Risco de lagarta militar em Cuanza Sul',
    severity: 'alta',
  },
];

export const fetchFeed = createAsyncThunk('feed/fetchFeed', async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockFeed), 400);
  });
});

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchFeed.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default feedSlice.reducer;
