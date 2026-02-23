import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBookmark = createAsyncThunk(
  'bookmarks/fetchBookmark',
  async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.slice(0,8);
    }
);

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: [],
    topics:[],
    loading :false,
    error: null,
  },
  reducers: {
    toggleBookmark: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);
      
      if (exists) {
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        state.items.push(item);
      }
    },
  },
  extraReducers :(builder)=>{
    builder
    .addCase(fetchBookmark.pending,(state)=>{
      state.loading= true;
      state.error= null;
        })
        .addCase(fetchBookmark.fulfilled,(state,action)=>{
          state.loading = false;
          state.topics = action.payload;
        })
        .addCase(fetchBookmark.rejected,(state,action )=>{
          state.loading = false;
          state.error= action.error.message;
        });

  }
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;