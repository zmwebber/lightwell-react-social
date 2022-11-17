import { combineReducers } from "redux";
import tweetReducer from "./ducks/TweetReducer";

const RootReducer = combineReducers({
    tweetReducer: tweetReducer,
});

export default RootReducer;