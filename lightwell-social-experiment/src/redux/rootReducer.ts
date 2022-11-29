import { combineReducers } from "redux";
import tweetFormReducer from "./ducks/tweetFormDuck/TweetFormReducer";

const RootReducer = combineReducers({
    myTweets: tweetFormReducer,
});

export default RootReducer;