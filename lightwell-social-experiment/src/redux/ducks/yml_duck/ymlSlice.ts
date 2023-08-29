import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { Tweet } from '../../../models/TweetModel';
import { IActionModel } from '../../../models/ActionModel';
import { getYmlTweets } from '../../../api/TweetApi';

export interface YmlState {
  ymlTweets: Tweet[] | undefined;
  loading: boolean;
}

const initialState: YmlState = {
  ymlTweets: [],
  loading: false,
};

const ymlSlice = createSlice({
  name: "yml",
  initialState,
  reducers: {
    toggleLoading: (state, action: IActionModel) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(getYmlTweets.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getYmlTweets.fulfilled, (state, action: IActionModel) => {
        state.loading = false;
        state.ymlTweets = action.payload;
      })
      .addDefaultCase((state, action) => { })
  },
});
export const selectYmlTweets = (state: RootState) => state.ymlTweets;
export default ymlSlice.reducer;