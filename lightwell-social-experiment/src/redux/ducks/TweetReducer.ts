
import { Tweet } from "../../models/TweetModel";
import actionTypes from "./TweetActionTypes";

interface DefaultStateI {
    tweet: Tweet[]
}

const initialState = {
    tweet: []
}

interface IActionModel {
    type: string,
    payload: any
}

export const tweetReducer = (state: DefaultStateI = initialState, action: IActionModel ) => {
    //Explain why type has to be actionType......
    const { type: actionType } = action;
    switch (actionType) {
        case actionTypes.TWEET_SENT_SUCCESS: {
             return { tweet: state.tweet.concat(action.payload) } 
        }
        default:
            return state;
    }
}

export default tweetReducer;