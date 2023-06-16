import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { Tweet } from '../../../models/TweetModel';
import { IActionModel } from '../../../models/ActionModel';
import { getFeed, getProfileFeed } from '../../../api/TweetApi';

export interface TweetFeedState {
  Tweets: Tweet[] | undefined;
  loading: boolean;
}

const initialState: TweetFeedState = {
  Tweets: [],
  loading: false,
};

const tweetFeedSlice = createSlice({
    name: "Feed",
    initialState,
    reducers: {
        toggleLoading: (state, action: IActionModel) => {
          state.loading = action.payload;
        },   
      }, 
    extraReducers: (builder) =>{
        builder
        .addCase(getFeed.fulfilled, (state, action: IActionModel) =>{
            state.loading = false;
            state.Tweets = action.payload;
        })        
        .addCase(getFeed.pending, (state, action) =>{
          state.loading = true;          
      })
        .addDefaultCase((state, action) => {})
    }, 
  });
  export const selectFeed = (state: RootState) => state.feed;
  export default tweetFeedSlice.reducer;