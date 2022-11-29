import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../redux/ducks/counter_duck/counterSlice';
import tweetFormReducer from '../redux/ducks/post_duck/tweetFormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myTweets: tweetFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
