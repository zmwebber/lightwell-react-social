import { combineReducers } from "redux";
import tweetFormReducer from "./ducks/tweetFormDuck/TweetFormReducer";

const RootReducer = combineReducers({
    tweetFormReducer,
});

export default RootReducer;