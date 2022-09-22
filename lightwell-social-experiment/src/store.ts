import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import RootReducer from './redux/rootReducer';

export const store = configureStore({
  reducer: RootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof RootReducer>;
