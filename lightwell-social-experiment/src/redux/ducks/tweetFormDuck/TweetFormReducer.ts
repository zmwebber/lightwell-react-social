import { Tweet } from "../../../models/TweetModel";
import tweetFormActionTypes from "./TweetFormActionTypes";

interface DefaultStateI {
    tweet: Tweet[]
    loading: boolean
}

const initialState = {
    tweet: [],
    loading: false,
}

interface IActionModel {
    type: string,
    payload: any
}

export const tweetFormReducer = (state: DefaultStateI = initialState, action: IActionModel ) => {
    //Explain why type has to be actionType......
    const { type: actionType } = action;
    switch (actionType) {
        case tweetFormActionTypes.FORM_SUBMIT: {
             return { tweet: state.tweet.concat(action.payload) }
             //On FORM_SUBMIT -> add tweet to array.
        }
        case tweetFormActionTypes.FORM_LOAD: {
            return { ...state, loading: true }
        }
        default:
            return state;
    }
}

export default tweetFormReducer;