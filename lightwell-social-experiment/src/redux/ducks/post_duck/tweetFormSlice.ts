import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Tweet } from '../../../models/TweetModel';
import { IActionModel } from '../../../models/ActionModel';
import { addTweet, deleteTweet, updateTweet, getProfileFeed } from '../../../api/TweetApi';

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
    incrementFavorite: (state, action: IActionModel) => {
      action.payload.favorite_count += 1;
      action.payload.favorited = true;
    },
    decrementFavorite: (state, action: IActionModel) => {
      action.payload.favorite_count -= 1;
      action.payload.favorited = false;
    },
    incrementRetweet: (state, action: IActionModel) => {
      action.payload.retweet_count += 1;
      action.payload.is_retweeted_status = true;
    },
    decrementRetweet: (state, action: IActionModel) => {
      action.payload.retweet_count -= 1;
      action.payload.is_retweeted_status = false;
    },
  },
  extraReducers: {
    [addTweet.pending.type]: (state, action) => {
      state.loading = true;
    },
    [addTweet.fulfilled.type]: (state, action) => {
      state.loading = false
      state.myTweets.push(action.payload.tweet);
    },
    [deleteTweet.pending.type]: (state, action) => {
      state.loading = true;
    },
    [deleteTweet.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [updateTweet.pending.type]: (state, action) => {
      state.loading = true;
    },
    [updateTweet.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [getProfileFeed.pending.type]: (state, action) =>{
      state.loading = true;          
    },
    [getProfileFeed.fulfilled.type]: (state, action) =>{
      state.loading = false;
      state.myTweets = action.payload;
    },
  } 
});

export const { toggleLoading, incrementFavorite, decrementFavorite, incrementRetweet, decrementRetweet } = tweetFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const myTweets = (state: RootState) => state.myTweets;

export default tweetFormSlice.reducer;
