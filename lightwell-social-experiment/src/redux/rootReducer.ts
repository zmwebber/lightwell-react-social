import { combineReducers } from "redux";
import tweetReducer from "./ducks/tweetDuck/TweetReducer";

const RootReducer = combineReducers({
    tweetReducer: tweetReducer,
});

export default RootReducer;