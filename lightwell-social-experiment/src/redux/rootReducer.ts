import { combineReducers } from "redux";
import tweetReducer from "./ducks/TweetReducer";

const RootReducer = combineReducers({
    tweetArray: tweetReducer,
});

export default RootReducer;