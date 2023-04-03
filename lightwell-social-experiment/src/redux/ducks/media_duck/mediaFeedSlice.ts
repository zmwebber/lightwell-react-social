import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { Media } from '../../../models/MediaModel';
import { IActionModel } from '../../../models/ActionModel';
import { getMedia } from '../../../api/MediaApi';

export interface MediaState {
  Media: Media[] | undefined;
  loading: boolean;
}

const initialState: MediaState = {
  Media: [],
  loading: false,
};

const mediaSlice = createSlice({
    name: "Media",
    initialState,
    reducers: {
        toggleLoading: (state, action: IActionModel) => {
          state.loading = action.payload;
        },   
      }, 
    extraReducers: (builder) =>{
        builder
        .addCase(getMedia.fulfilled, (state, action: IActionModel) =>{
            state.loading = false;
            state.Media = action.payload;
        })        
      .addCase(getMedia.pending, (state, action) =>{
          state.loading = true;          
      })
        .addDefaultCase((state, action) => {})
    }, 
  });
  export const selectFeed = (state: RootState) => state.feed;
  export default mediaSlice.reducer;