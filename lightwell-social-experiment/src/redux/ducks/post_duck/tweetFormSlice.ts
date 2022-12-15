import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { fetchCount } from '../../../app/functions/counterAPI';
import { Tweet } from '../../../models/TweetModel';
import { IActionModel } from '../../../models/ActionModel';
import { Action } from '@remix-run/router';
import { addTweet } from '../../../api/TweetApi';
//import { useSelector } from 'react-redux';

export interface TweetFormState {
  myTweets: Tweet[];
  loading: boolean;
}

const initialState: TweetFormState = {
  myTweets: [],
  loading: false,
};

export const tweetFormSlice = createSlice({
  name: 'myTweets',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {    
    toggleLoading: (state, action: IActionModel) => {
      state.loading = action.payload;
    },   
    deleteTweet: (state, action: IActionModel) => {
      const id = action.payload.tweet.id;
      state.myTweets = state.myTweets.filter((tweet) => tweet.id !== id);
    },
  },
  extraReducers: {
    [addTweet.pending.type]: (state, action) => {
      state.loading = true;
  },
    [addTweet.fulfilled.type]: (state, action) => {
      state.loading = false
      state.myTweets.unshift(action.payload);
  },
  }  
});

export const { deleteTweet, toggleLoading } = tweetFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

//export const myTweets = useSelector((state: RootState) => state.myTweets.myTweets);
export const myTweets = (state: RootState) => state.myTweets;

export default tweetFormSlice.reducer;
