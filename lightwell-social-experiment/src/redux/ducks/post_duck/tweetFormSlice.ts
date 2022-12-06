import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { fetchCount } from '../../../app/functions/counterAPI';
import { Tweet } from '../../../models/TweetModel';
import { IActionModel } from '../../../models/ActionModel';
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
    submit: (state, action: IActionModel) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.myTweets.push(action.payload);
    },
    toggleLoading: (state, action: IActionModel) => {
      state.loading = action.payload;
    },   
  },  
});

export const { submit, toggleLoading} = tweetFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

//export const myTweets = useSelector((state: RootState) => state.myTweets.myTweets);
export const myTweets = (state: RootState) => state.myTweets;

export default tweetFormSlice.reducer;
