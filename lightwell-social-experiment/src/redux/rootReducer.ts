import { combineReducers } from "redux";
import tweetReducer from "./ducks/tweetDuck/TweetReducer";

const RootReducer = combineReducers({
    tweetArray: tweetReducer,
});

export default RootReducer;