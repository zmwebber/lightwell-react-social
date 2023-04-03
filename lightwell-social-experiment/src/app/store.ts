import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../redux/ducks/counter_duck/counterSlice';
import tweetFeedReducer from '../redux/ducks/feed_duck/tweetFeedSlice';
import tweetFormReducer from '../redux/ducks/post_duck/tweetFormSlice';
import mediaReducer from '../redux/ducks/media_duck/mediaFeedSlice'
import userReducer from '../redux/ducks/user_duck/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myTweets: tweetFormReducer,
    media: mediaReducer,
    feed: tweetFeedReducer,
    user: userReducer,
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
