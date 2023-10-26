import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../redux/ducks/counter_duck/counterSlice';
import tweetFeedReducer from '../redux/ducks/feed_duck/tweetFeedSlice';
import tweetFormReducer from '../redux/ducks/post_duck/tweetFormSlice';
import userReducer from '../redux/ducks/user_duck/userSlice';
import ymlTweetsReducer from '../redux/ducks/yml_duck/ymlSlice'
import profileReducer from '../redux/ducks/profile_duck/profileSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myTweets: tweetFormReducer,
    feed: tweetFeedReducer,
    user: userReducer,
    ymlTweets: ymlTweetsReducer,
    viewedProfile: profileReducer
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
